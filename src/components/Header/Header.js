import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header-menu-area">
                <img src="./logo.png" alt="" />
                <nav>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/api">API</a>
                    <input type="text" />
                </nav>
            </div>
        </div>
    );
};

export default Header;