import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated, getToken, keycloakUserId} from '../auth/keycloak';
import { userExistsInDB } from '../requests/identity_provider/CheckIdentityProvider';

export const ProtectedRoute = () => {
  const [authStatus, setAuthStatus] = useState({ 
    authenticated: null, 
    token: null,
    userId: null,
    onlyIdentityProvider: null 
  });

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();

      if (authenticated) {
        const token = getToken();
        const userId = keycloakUserId();
        const onlyIdentityProvider = await userExistsInDB({token, userId});
        setAuthStatus({ authenticated, token, userId, onlyIdentityProvider});
      }
    };

    checkAuth();
  }, []);

  if (authStatus.authenticated === null && authStatus.onlyIdentityProvider === null) {
    return <div>Loading...</div>;
  }

  if (authStatus.authenticated && authStatus.onlyIdentityProvider ) {
    return <Outlet/>
  } else if (authStatus.authenticated && !authStatus.onlyIdentityProvider) {
    return <Navigate to='/complete-information'/>;
  }

  return authStatus.authenticated ? <Outlet /> : <Navigate to='/signup' />;
};
