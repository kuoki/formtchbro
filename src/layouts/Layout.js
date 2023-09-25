import React from "react";
import '../layouts/Layout.css'
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import Sidebar from "./common/sidebar/Sidebar";
import Header from "./common/header/Header";




function Layout(){


    return (
        <div className='contenedor-layout'>
            < Header />
            < Navbar />
            < Sidebar />
            < Footer />
        </div>
        
    )
}

export default Layout;