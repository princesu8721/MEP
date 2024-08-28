import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';

const Sidebar = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="sidebar">
            <button onClick={handlePrevious}>{"<"}</button>
            <SidebarItem item={items[currentIndex]} />
            <button onClick={handleNext}>{">"}</button>
        </div>
    );
};

export default Sidebar;
