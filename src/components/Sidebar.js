import React, { useState } from "react";
import ContactList from "./ContactList";
import "../styles/Sidebar.css";
import { FaSearch, FaPlus, FaFilter } from "react-icons/fa";
import { MdOutlineGroups2 } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";



const Sidebar = () => {
  const [ setSelectedContact ] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
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
        <div className="sidebar-icons-top">
          <div className="sidebar-icons"><FaSearch /></div>
          <div className="sidebar-icons-bg"><FaPlus /></div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="buttons-section">
        <button className="button active">Messages</button>
        <button className="button">Segments</button>
      </div>

      {/* Dropdown Section */}
      <div className="dropdown-section">
        <div className="dropdown-group">
          <button className="dropdown-button"><MdOutlineGroups2 className="group-filter-icon" />All <RiArrowDropDownLine className="sidebar-dropdown-icon" /></button>
          <div className="dropdown-content">
            <button>All Numbers</button>
            <button>Saved Numbers</button>
          </div>
        </div>
        <div className="dropdown-label">
          <button className="dropdown-button">< FaFilter className="group-filter-icon" />Oldest <RiArrowDropDownLine className="sidebar-dropdown-icon" /></button>
          <div className="dropdown-content">
            <button>Older</button>
            <button>News</button>
            <button>Recent</button>
          </div>
        </div>
      </div>

      {/* Contact List */}
      <ContactList onContactClick={handleContactClick} />
    </div>
  );
};

export default Sidebar;
