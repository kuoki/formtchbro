import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "../common/content/Content";
import About from "../pages/about/About";
import Home from '../pages/home/Home'
import Form from "../pages/form/Form";


function Routing() {
    return (
        <div className="col-10">
            <Routes>
                <Route path="/" element={<Content />}>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/form" element={<Form />}></Route>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="*" element={<Home />}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default Routing;