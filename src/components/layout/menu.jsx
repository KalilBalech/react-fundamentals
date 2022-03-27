import react from "react";
import "./menu.css"
import {Link } from "react-router-dom"

const Menu = props => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <Link to="/home" >Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
