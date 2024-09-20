import React from "react";

import "./nav.css";

function Nav() {
    return (
        <nav className="nav-bar">
            <p className="logo">Dan</p>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}

export default Nav;