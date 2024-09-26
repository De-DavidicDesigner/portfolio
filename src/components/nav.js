import React from "react";
import { Page } from "./About";

import "./nav.css";

function Nav() {
    return (
        <nav className="nav-bar">
            <p className="logo">Dan</p>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/project">Projects</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    )
}

export default Nav;