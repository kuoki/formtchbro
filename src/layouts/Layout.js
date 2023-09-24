import React from "react";
import '../layouts/Layout.css'


function Layout(){


    return (
        <div className='contenedor-layout'>
            <div> 
                <header className="header-layout">
                    <h1> Formulario </h1>
                </header> 
                    </div>
            <div className='sidebar-layout'>sidebar</div>
            <div className='nav-layout'> 
                <nav>
                    <a href="#"> Home </a>
                    <a href="#"> Noticias </a>
                    <a href="#"> Sobre Nosotros</a>
                    <a href="#"> Contacto </a>
                </nav> </div>
            <div className='footer-layout'> <footer> <h1> Footer </h1> </footer></div>
        </div>
        
    )
}

export default Layout;