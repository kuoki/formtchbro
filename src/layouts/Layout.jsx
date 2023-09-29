import React from "react";
import '../layouts/Layout.css'
import Navbar from '../common/navbar/navbar';
import Footer from '../common/footer/footer';
import Sidebar from '../common/sidebar/sidebar';
import Header from '../common/header/header';
import Routing from "../routing/Routing";
import { ChairManagementProvider } from "../context/ChairManagementProvider";




function Layout() {
    return (
        <>
            <Header />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <ChairManagementProvider>
                        <Routing />
                    </ChairManagementProvider>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout;