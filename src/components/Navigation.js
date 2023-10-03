import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const NavBar = () => {
    return (
        <nav>

            <div className="home-button">
                <Link to='/' > <img className="back" src= {require("./images/logo.png")} /> </Link>
            </div>


            <div id="myLinks">
                <li className="navli">
                    <Link to='/'> Home </Link>
                </li>

                <li className="navli">
                    <Link to='/animals'> Animal Library </Link>
                </li>
            </div>

        </nav>
    );
}

export default NavBar;