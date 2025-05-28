// firestoreApi.js
// import { db } from './firebase';
// import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from "../firebaseDatabase/firebase";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { storage } from "../firebaseDatabase/firebase";
// import ref from "react";
import { uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";

import { setDoc } from "firebase/firestore";
import { ref } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getDoc } from "firebase/firestore";

// POST (Add) Data
export const postData = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const postDatadude = async (collectionName, data) => {
  try {
    // Step 1: Upload image to Firebase Storage
    const storageRef = ref(storage, `images/${data.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, data.file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // You can add progress monitoring here if needed
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error("Error uploading image: ", error);
      },
      async () => {
        // Step 2: Get download URL after image is uploaded
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // Step 3: Add the download URL to Firestore data
        const dataWithImage = { ...data, imageUrl: downloadURL };

        // Step 4: Add data (including image URL) to Firestore
        const docRef = await addDoc(
          collection(db, collectionName),
          dataWithImage
        );
        console.log("Document written with ID: ", docRef.id);
      }
    );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// GET (Fetch) Data
// lgelectronics
export const getData = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const dataArr = [];
    querySnapshot.forEach((doc) => {
      dataArr.push({ id: doc.id, ...doc.data() });
    });
    return dataArr;
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};
export const deleteData = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    console.log(`Document with id ${id} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

// new forward functionality
// export const forwardData = async (
//   collectionName,
//   documentId,
//   forwardCollection,
//   phoneNumber
// ) => {
//   try {
//     // Fetch the document from the original collection
//     const docRef = doc(db, collectionName, documentId);
//     const docSnapshot = await docRef.get();

//     if (!docSnapshot.exists) {
//       console.error("Document not found");
//       return;
//     }

//     const data = docSnapshot.data();

//     // Send the data via SMS
//     const functions = getFunctions();
//     const sendSms = httpsCallable(functions, "sendSms");
//     await sendSms({ phoneNumber, message: JSON.stringify(data) });

//     // Move the data to the forward collection with a TTL of 8 hours
//     const expirationTime = Date.now() + 8 * 60 * 60 * 1000;
//     const forwardData = { ...data, expiresAt: expirationTime };
//     await setDoc(
//       doc(collection(db, forwardCollection), documentId),
//       forwardData
//     );

//     // Delete the original document
//     await deleteDoc(docRef);
//     console.log(
//       `Document ${documentId} forwarded and original deleted successfully.`
//     );
//   } catch (error) {
//     console.error("Error forwarding data: ", error);
//   }
// };
export const forwardData = async (
  collectionName,
  forwardCollection,
  documentId,
  phoneNumber
) => {
  try {
    // Fetch the original document
    const docRef = doc(db, collectionName, documentId);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      console.error("Document not found.");
      return;
    }

    const data = docSnapshot.data();

    // Add the expiry time (8 hours)
    const forwardData = {
      ...data,
      forwardedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(),
      forwardedTo: phoneNumber,
    };

    // Add data to the forward collection
    await setDoc(
      doc(collection(db, forwardCollection), documentId),
      forwardData
    );
    console.log("Data forwarded successfully!");

    // Delete the original document
    await deleteDoc(docRef);
    console.log("Original document deleted successfully.");
  } catch (error) {
    console.error("Error forwarding data: ", error);
  }
};

export const SendtoEmail = (formData) => {
  const adminEmail = "ryuzandeveloper@gmail.com"; // Hardcoded admin email

  // Construct subject and body
  const subject = encodeURIComponent(
    `SPECIMEN -- ${formData.name} -- ${formData.id}`
  );

  let body = "";
  for (const [key, value] of Object.entries(formData)) {
    body += `${key}: ${value}\n`;
  }
  const bodyEncoded = encodeURIComponent(body);

  // Construct mailto and Gmail links
  const mailtoLink = `mailto:${adminEmail}?subject=${subject}&body=${bodyEncoded}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${adminEmail}&su=${subject}&body=${bodyEncoded}`;

  // Open mailto link in a new window or tab
  const mailWindow = window.open(mailtoLink, "_self"); // _self to trigger mailto in current tab

  // Check if mailWindow is not opened or closed (timeout mechanism)
  setTimeout(() => {
    if (
      !mailWindow ||
      mailWindow.closed ||
      typeof mailWindow.closed === "undefined"
    ) {
      console.log("Mail client did not open. Fallback to Gmail.");
      // Open Gmail if mailto did not work
      window.open(gmailLink, "_blank");
    }
  }, 1000); // Increased timeout for Edge browsers
};
