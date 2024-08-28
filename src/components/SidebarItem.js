import React from 'react';
import './SidebarItem.css';

const SidebarItem = ({ item}) => {
    return (
        <div className="sidebar-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    );
};

export default SidebarItem;
