import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "../../componentsCss/ConsoleBox.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  FaHome,
  FaUser,
  FaInfoCircle,
  FaGripLines,
  FaBuilding,
  FaSearch,
} from "react-icons/fa";
import { AppContext } from "../../../App";

const ConsoleBox = () => {
  const { brandName } = useContext(AppContext);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [position, setPosition] = useState({
    x: window.innerWidth - 100,
    y: 150,
  });

  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    e.preventDefault();
    isDragging.current = true;

    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

    dragStart.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };

    // Add global listeners
    window.addEventListener("mousemove", handleDragging);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchmove", handleDragging, { passive: false });
    window.addEventListener("touchend", handleDragEnd);
  };

  const handleDragging = (e) => {
    if (!isDragging.current) return;

    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

    setPosition({
      x: clientX - dragStart.current.x,
      y: clientY - dragStart.current.y,
    });
  };

  const handleDragEnd = () => {
    isDragging.current = false;

    // Remove global listeners
    window.removeEventListener("mousemove", handleDragging);
    window.removeEventListener("mouseup", handleDragEnd);
    window.removeEventListener("touchmove", handleDragging);
    window.removeEventListener("touchend", handleDragEnd);
  };

  const icons = [
    {
      icon: <FaHome size={20} />,
      tooltip: "Home",
      path: `/${brandName}/`,
    },
    {
      icon: <FaBuilding size={20} />,
      tooltip: "Brand Page",
      path: `/${brandName}/`,
    },
    {
      icon: <FaUser size={20} />,
      tooltip: "Login",
      path: `/${brandName}/settings`,
    },
    // {
    //   icon: <FaSearch size={20} />,
    //   tooltip: "Search engine",
    //   path: `/chromer`,
    // },
  ];

  return (
    <div className="console-box" style={{ left: position.x, top: position.y }}>
      <div
        className="drag-handle"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        <FaGripLines size={18} />
      </div>

      {icons.map((item, index) => (
        <OverlayTrigger
          key={index}
          placement="left"
          overlay={<Tooltip>{item.tooltip}</Tooltip>}
        >
          <div
            className="console-icon"
            onClick={() => navigate(item.path)} // Use navigate() for routing
          >
            {item.icon}
          </div>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default ConsoleBox;
