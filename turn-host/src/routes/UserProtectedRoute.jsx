import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const UserProtectedRoute = () => {
  const { authData, userType, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (authData.auth && userType === 1) { // Assuming 1 means regular user
    return <Outlet />;
  }

  return <Navigate to='/' />;
};
