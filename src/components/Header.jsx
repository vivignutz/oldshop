/* import React from 'react';
 */import logo from '../assets/static/logo.png';
import '../styles/Header.css';

function Header() {
    return (
        <header>
        <div>
            <a href="https://redi-school.org" target="_blank" rel="noreferrer">
            <img src={logo} className="logo" alt="shop logo" />
            </a>
        </div>
        <nav>
            {/* Navigation links come here */}
        </nav>
        </header>
    );
}

export default Header;
