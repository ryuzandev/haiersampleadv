

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOHon4Bw7--l_Vx2xvoV-UVEsUGNVgmMM",
  authDomain: "ryuzanelecapi.firebaseapp.com",
  projectId: "ryuzanelecapi",
  storageBucket: "ryuzanelecapi.firebasestorage.app",
  //   storageBucket: "ryuzanelecapi.appspot.com",
  // <-- Correct here
  messagingSenderId: "793881219288",
  appId: "1:793881219288:web:57179ed91805d7797807ad",
  measurementId: "G-RQT1B0E019",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

// added
// Initialize Firestore (Database)
const db = getFirestore(app);

export { db,storage,analytics };
