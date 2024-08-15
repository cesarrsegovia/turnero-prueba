// import { Navigate, useLocation } from "react-router-dom"


// export const PrivateRoute = ({children}) => {

//     const { state } = useLocation();

//     return state?.logged ? children : <Navigate to='/login'/>
// }

import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const isLogged = location.state?.logged;

    return isLogged ? children : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};