import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <li className="link">
                <Link to='/'> Home </Link>
            </li>

            <li className="link">
                <Link to='/animals'> Animal Library </Link>
            </li>
 
        </nav>
    );
}

export default NavBar;