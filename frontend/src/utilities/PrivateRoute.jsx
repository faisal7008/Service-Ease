import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

export default function PrivateRoute({path, component: Component, ...props}) {
    const {user} = useSelector(state => state.auth)
  return (
    <Route
      path={path}
      element={
        user ? (
          <Component {...props} />
        ) : (
          <Navigate replace to="/login" />
        )
      }
    />
  );
}
