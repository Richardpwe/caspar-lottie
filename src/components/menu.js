import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header-container">
            <div className="logo">
                <Link to="/"><img src="/img/TextLogo.png" alt="Limonaden-Logo" className="logo-image" /></Link>
            </div>
            <nav className="nav">
                <Link className="nav-link" to="/">Startseite</Link>
                <Link className="nav-link" to="/about">Über uns</Link>
                <Link className="nav-link" to="/unsere-limonaden">Unsere Limonaden</Link>
            </nav>
        </header>
    );
}

export default Header;