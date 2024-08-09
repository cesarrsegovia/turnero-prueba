import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../pages/Hero";
import Home from "../pages/Home";
import App from "../App";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/app" element={<App />} />
        </Routes>
    );
};

export default AppRoutes;
