import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mx-2" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-2">
                        <li className="nav-item active mx-2">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/form">Form</a>
                        </li>
                        <li className="nav-item">
                        <Link to="/list" className="text-white text-decoration-none">List</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
};


export default Navbar;