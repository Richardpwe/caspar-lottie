import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <ul className="text-left">
                <li>
                    <Link to="/casparcg">CasparCG</Link>
                </li>
                <li>
                    <Link to="/lottie">Lottie</Link>
                </li>
                <li>
                    <Link to="/threejs">Three.js</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
