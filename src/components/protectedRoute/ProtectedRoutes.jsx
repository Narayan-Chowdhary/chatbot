import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <>
        <Outlet />
      </>
    );
  }
  return <Navigate to="/" replace={true} />;
};

export default ProtectedRoutes;
