import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists, false otherwise
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
