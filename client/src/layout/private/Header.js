import React from "react";
import { Link } from "react-router-dom";    

function Header () {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/details">Form Details</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header