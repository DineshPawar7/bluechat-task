import React, { useState } from "react";
import "../styles/Sidebar.css";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";



const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("messages");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="logo-section">
        <img src="data:image/jpeg;base64,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" alt="Logo" className="logo" />
        <div className="logo-text">
          <h1>BlueChat</h1>
          <h2>Inbox</h2>
        </div>
        <div className="sidebar-icons">
          <div className="sidebar-icon sidebar-search-icon"><FaSearch /></div>
          <div className="sidebar-icon sidebar-create-icon"><FaPlus /></div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="buttons-section">
        <button
          className={`button ${activeTab === "messages" ? "active" : ""}`}
          onClick={() => handleTabChange("messages")}
        >
          Messages
        </button>
        <button
          className={`button ${activeTab === "segments" ? "active" : ""}`}
          onClick={() => handleTabChange("segments")}
        >
          Segments
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
