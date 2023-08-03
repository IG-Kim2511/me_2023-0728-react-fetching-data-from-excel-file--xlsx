// TabPage.js
import React, { useState } from 'react';
import "./TabPage.css";

const TabPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="tab-page">
      <div className="tabs">
    
        <Tab label="Tab 1" index={0} activeTabIndex={activeTabIndex} onClick={handleTabClick} />
        <Tab label="Tab 2" index={1} activeTabIndex={activeTabIndex} onClick={handleTabClick} />
        <Tab label="Tab 3" index={2} activeTabIndex={activeTabIndex} onClick={handleTabClick} />
      </div>
      <div className="tab-content">
        {activeTabIndex === 0 && <p>Content of Tab 1</p>}
        {activeTabIndex === 1 && <p>Content of Tab 2</p>}
        {activeTabIndex === 2 && <p>Content of Tab 3</p>}
      </div>
    </div>
  );
};

// props
const Tab = ({ label, index, activeTabIndex, onClick }) => {
    const isActive = index === activeTabIndex;
  
    return (
      <div
        className={`tab ${isActive ? 'active' : ''}`}
        onClick={() => onClick(index)}
      >
        {label}
      </div>
    );
  };


export default TabPage;
