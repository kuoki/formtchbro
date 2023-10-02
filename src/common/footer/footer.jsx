import React from "react";
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="container-fluid">
            <div className='row p-1 bg-secondary text-white'>
                <div className='col-xs-12 col-md-6 col-lg-3'>
                    <p className='h3'> FormtchBro </p>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-3'>
                    <p className="h5 mb-3"> About Us</p>
                    <div className="mb-2">
                        <Link to="/list" className="text-white text-decoration-none">List</Link>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="text-white text-decoration-none"> Terms & Conditions </a>
                    </div>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-3'>
                    <p className="h5 mb-3"> Notices </p>
                    <div className="mb-2">
                        <a href="/" className="text-white text-decoration-none"> Today </a>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="text-white text-decoration-none"> This Month </a>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="text-white text-decoration-none"> This Year </a>
                    </div>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-3'>
                    <p className="h5 mb-3"> Contact </p>
                    <div className="mb-2">
                        <a href="/" className="text-white text-decoration-none"> Social Media </a>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="text-white text-decoration-none"> Email </a>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer;