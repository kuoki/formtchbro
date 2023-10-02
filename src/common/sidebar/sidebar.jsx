import React from "react";
import './sidebar.css'
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div className="bg-dark col-auto col-md-2 d-flex flex-column">
      <a href="/" className="text-decoration-none d-none d-sm-inline text-white d-flex mt-2">
        <span className="fs-4">Home</span>
      </a>
      <hr className="text-secondary d-none d-sm-inline" />
      <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
        <li className="nav-item fs-4">
          <a href="/" className="nav-link text-white" aria-current='page'>
            <i className="bi bi-1-circle"></i>
            <span className="ms-3 d-none d-sm-inline"> Home </span> </a>
        </li>
        <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">

          <Link to="/form" className="text-white text-decoration-none" >
            <i className="bi bi-2-circle"></i>
            <span className="ms-3 d-none d-sm-inline"> Form </span> </Link>
        </li>
        <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">

          <Link to="/list" className="text-white text-decoration-none">
            <i className="bi bi-3-circle"></i>
            <span className="ms-3 d-none d-sm-inline"> List </span>
          </Link>
        </li>
        <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">


        </li>
      </ul>
    </div>
  )
}


export default Sidebar;