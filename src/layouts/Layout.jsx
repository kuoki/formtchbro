import React from "react";
import '../layouts/Layout.css'
import Navbar from '../common/navbar/navbar';
import Footer from '../common/footer/footer';
import Sidebar from '../common/sidebar/sidebar';
import Header from '../common/header/header';
import Content from "../content/Content";




function Layout() {
    return (
        <>
            < Header />
            < Navbar />

            <div className="container-fluid">
                <div className="row">
                    < Sidebar />
                    <Content />
                </div>
            </div>
            < Footer />

        </>
    )
}

export default Layout;