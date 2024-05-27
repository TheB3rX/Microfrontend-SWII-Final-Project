import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AdminProtectedRoute = () => {
  const { authData, userType, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (authData.auth && userType === 0) { // Assuming 0 means admin
    return <Outlet />;
  }

  return <Navigate to='/' />;
};
