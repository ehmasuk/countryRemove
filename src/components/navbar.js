import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <div className='nav-bar'>
            <Link to='/'>Ultra Countries</Link>
        </div>
    );
}
