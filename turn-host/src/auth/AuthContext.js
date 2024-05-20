import React, { createContext, useContext, useEffect, useState } from 'react';
import { keycloak } from '../Keycloak'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  useEffect(() => {
    if (keycloak.token) {
      const newToken = keycloak.token;
      const newRefreshToken = keycloak.refreshToken;
      const newUserId = keycloak.subject;

      setToken(newToken);
      setRefreshToken(newRefreshToken)
      setUserId(newUserId);

      localStorage.setItem('token', newToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      localStorage.setItem('userId', newUserId);
    }
  }, []);

  const updateSession = () => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        const newToken = keycloak.token;
        const newRefreshToken = keycloak.refreshToken;
        setToken(newToken);
        setRefreshToken(newRefreshToken)
        localStorage.setItem('token', newToken);
        localStorage.setItem('refreshToken', newRefreshToken);
      }
    }).catch(() => {
      keycloak.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userId');
    });
  };

  return (
    <AuthContext.Provider value={{ token, refreshToken, userId, updateSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
