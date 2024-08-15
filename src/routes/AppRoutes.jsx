import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import  {LoginPage, UserPage, Hero, Home, CorteClasico, AfeitadoTradicional, ArregloBarba, CorteYBarba} from "../pages";
import { PrivateRoute } from "./PrivateRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/app" element={<App />} />
            <Route path="/corte-clasico" element={<CorteClasico />} />
            <Route path="/afeitado-tradicional" element={<AfeitadoTradicional />} />
            <Route path="/arreglo-barba" element={<ArregloBarba />} />
            <Route path="/corte-y-barba" element={<CorteYBarba />} />
            <Route path="/user" element={
                <PrivateRoute>
                    <UserPage/>
                </PrivateRoute>
            }/>
        </Routes>
    );
};

export default AppRoutes;
