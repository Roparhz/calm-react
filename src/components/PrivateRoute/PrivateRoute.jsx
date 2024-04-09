import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  console.log(isLoggedIn, "niktam"),
  (
    <Routes>
      <Route
        {...rest}
        element={(props) =>
          isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>,
    console.log(isLoggedIn, "tamere")
  )
);
export default PrivateRoute;
