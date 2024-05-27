import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { userExistsInDB } from '../requests/identity_provider/CheckIdentityProvider';

export const IdentityProtectedRoute = () => {
  const { authData, loading } = useAuth();
  const [onlyIdentityProvider, setOnlyIdentityProvider] = useState(null);

  useEffect(() => {
    const checkUserInDB = async () => {
      if (authData.auth) {
        const result = await userExistsInDB({ token: authData.token, userId: authData.userId });
        setOnlyIdentityProvider(result);
      }
    };

    if (authData.auth !== null) {
      checkUserInDB();
    }
  }, [authData]);

  if (loading || onlyIdentityProvider === null) {
    return <div>Loading...</div>;
  }

  // Redirect to home if user has completed their information
  if (authData.auth && !onlyIdentityProvider) {
    return <Outlet />;
  } else if (authData.auth && onlyIdentityProvider) {
    return <Navigate to='/' />;
  }

  return authData.auth ? <Outlet /> : <Navigate to='/signup' />;
};
