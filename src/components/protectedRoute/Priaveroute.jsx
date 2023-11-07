import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element, isAuthenticated, ...props }) {
    return isAuthenticated ? (
        <Route {...props} element={element} />
    ) : (
        <Navigate to="/" />
    );
}

export default PrivateRoute;
