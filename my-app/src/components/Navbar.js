import React from "react";
import globe from "../images/Fill 213.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav--image" src={globe} />
            <span className="nav--text">my travel journal.</span>
        </nav>
    )
}