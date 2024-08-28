import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';

const Sidebar = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(items.length - 1);
        }
    };
    const handleNext2 = () => {
        if (currentIndex2 < items.length - 1) {
            setCurrentIndex2(currentIndex2 + 1);
        } else {
            setCurrentIndex2(0);
        }
    };

    const handlePrevious2 = () => {
        if (currentIndex2 > 0) {
            setCurrentIndex2(currentIndex2 - 1);
        } else {
            setCurrentIndex2(items.length - 1);
        }
    };

    return (
        <div className="sidebar-container">
        <div className="sidebar">
            <button className="prev" onClick={handlePrevious}>{"<"}</button>
            <h5>TRAININGS</h5>
            <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                    <div className="carousel-item" key={index}>
                        <SidebarItem item={item}/>
                    </div>
                ))}
            </div>
            <button className="next" onClick={handleNext}>{">"}</button>
        </div>
        <div style={{marginTop:'13%'}}></div>
        <div className="sidebar">
            <button className="prev" onClick={handlePrevious2}>{"<"}</button>
            <h5>EVENT</h5>
            <div className="carousel-container" style={{ transform: `translateX(-${currentIndex2 * 100}%)` }}>
                {items.map((item, index) => (
                    <div className="carousel-item" key={index}>
                        <SidebarItem item={item}/>
                    </div>
                ))}
            </div>
            <button className="next" onClick={handleNext2}>{">"}</button>
        </div>
        </div>
    );
};

export default Sidebar;