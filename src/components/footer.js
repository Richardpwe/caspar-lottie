import React from 'react';
import '../App.css';

function Footer() {
    return (
        <footer className="footer-container">
            <p className="footer-text">© {(new Date()).getFullYear()} Limonadenhersteller. Alle Rechte vorbehalten.</p>
            <div className="social-media-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </footer>
    );
}

export default Footer;