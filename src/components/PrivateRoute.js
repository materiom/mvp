// Dependencies
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

// Hooks
import { useAuth } from "../hooks/useAuth";

// Custom route with auth added
export default function PrivateRoute() {
  // get user context to check if user is logged in
  const userStatus = useContext(useAuth);
  // if user logged in return the nested component else return Login component
  return true ? <Outlet /> : <Navigate to="/login" replace />;
}
