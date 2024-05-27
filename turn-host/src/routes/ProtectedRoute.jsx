import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { userExistsInDB } from '../requests/identity_provider/CheckIdentityProvider';
import { createUser } from '../requests/user/UserRequests';
import { getClientAuthorization } from '../requests/client/ClientRequest';
import { getToken } from '../auth/keycloak';

export const ProtectedRoute = () => {
  const { authData, loading } = useAuth();
  const [onlyIdentityProvider, setOnlyIdentityProvider] = useState(null);

  useEffect(() => {
    const checkUserInDB = async () => {
      if (authData.auth) {
        const result = await userExistsInDB({ token: authData.token, userId: authData.userId });
        setOnlyIdentityProvider(result);
        console.log(authData.token)
        console.log(authData.userId)
      }
    };

    if (authData.auth !== null) {
      checkUserInDB();
    }
  }, [authData]);

  if (loading || onlyIdentityProvider === null) {
    return <div>Loading...</div>;
  }

  if (authData.auth && onlyIdentityProvider) {
    return <Outlet />;
  } else if (authData.auth && !onlyIdentityProvider) {
    return <Navigate to='/complete-information' />;
  }

  return authData.auth ? <Outlet /> : <Navigate to='/signup' />;
};
