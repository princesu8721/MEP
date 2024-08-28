import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>
            <div className="menu">
                <a href="#about">About</a>
                <a href="#journey">Journey</a>
                <a href="#resources">Resources</a>
            </div>
        </nav>
    );
};

export default Navbar;
