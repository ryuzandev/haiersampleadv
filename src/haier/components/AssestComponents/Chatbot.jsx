import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChatDotsFill } from "react-icons/bs";
// import "../../componentsCss/Chatbot.css";
import "../../../haier/componentsCss/Chatbot.css";
import { AppContext } from "../../../App";

const Chatbot = () => {
  const { brandName } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const handleToggle = () => setOpen(!open);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.toLowerCase();
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    // Matching keywords
    if (userMsg.includes("tv") || userMsg.includes("television")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Television page.",
          // route: "/tv",
          route: `/${brandName}/haier/tv`,
        },
      ]);
    } else if (userMsg.includes("ac") || userMsg.includes("air conditioner")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Air Conditioner page.",
          // route: "/aircondition",
          route: `/${brandName}/haier/aircondition`,
        },
      ]);
    } else if (userMsg.includes("microwave")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Microwave page.",
          // route: "/microwave",
          route: `/${brandName}/haier/microwave`,
        },
      ]);
    } else if (
      userMsg.includes("washing") ||
      userMsg.includes("washing machine")
    ) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Washing Machine page.",
          // route: "/washing",
          route: `/${brandName}/haier/washing`,
        },
      ]);
    } else if (userMsg.includes("refrigerator")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Refrigerator page.",
          // route: "/Refrigerator",
          route: `/${brandName}/haier/Refrigerator`,
        },
      ]);
    } else if (userMsg.includes("dish washer")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the dish washer page.",
          // route: "/DishWasher",
          route: `/${brandName}/haier/DishWasher`,
        },
      ]);
    } else if (userMsg.includes("yes")) {
      const lastBotMsg = messages.filter((m) => m.from === "bot").slice(-1)[0];
      if (lastBotMsg?.route) {
        navigate(lastBotMsg.route);
      }
    } else {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: 'Sorry, I didn\'t get that. Try typing "television", "microwave", "AC", etc.',
        },
      ]);
    }
  };

  const handleLinkClick = (route) => {
    navigate(route);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={handleToggle}>
        <span>
          <b>AI BOT </b>
        </span>
        <BsChatDotsFill size={35} />
      </div>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">Ask me anything!</div>
          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.from}`}>
                {msg.route ? (
                  <span
                    className="chatbot-link"
                    onClick={() => handleLinkClick(msg.route)}
                  >
                    {msg.text}
                  </span>
                ) : (
                  msg.text
                )}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type here..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
