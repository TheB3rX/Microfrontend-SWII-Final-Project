import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const isAuthenticated = () => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists, false otherwise
  };

  return isAuthenticated() ? <Outlet /> : <Navigate to="/signup" />;
};

export { PrivateRoutes };
