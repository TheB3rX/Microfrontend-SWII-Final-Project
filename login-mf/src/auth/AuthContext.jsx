import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { initKeycloak } from "./Keycloak";
import { keycloak } from "../Keycloak";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('keycloakToken');
    const refreshToken = localStorage.getItem('keycloakRefreshToken');

    if (token) {
      keycloak.token = token;
      keycloak.refreshToken = refreshToken;
    }

    initKeycloak().then(authenticated => {
      setIsAuthenticated(authenticated);
      if (authenticated) {
        keycloak.loadUserInfo().then(info => setUserInfo(info));
      }
    });
  }, []);  return (
    <AuthContext.Provider value={{ keycloak, isAuthenticated, userInfo }}>
      {children}
    </AuthContext.Provider>
  );

  // This can be experimental, based on Oauth, idk, ill go with chatgpt
  // const [token, setToken_] = useState(localStorage.getItem("token"));

  // const setToken = (newToken) => {
  //   setToken_(newToken);
  // }

  // useEffect(() => {
  //   if (token) {
  //     localStorage.setItem('token', token);
  //   } else {
  //     localStorage.removeItem('token');
  //   } 
  // }, [token]);

  // const contextValue = useMemo(
  //   () => ({
  //     token,
  //     setToken,
  //   }),
  //   [token]
  // );

  // return (
  //   <AuthContext.Provider value={contextValue}>
  //     {children}    
  //   </AuthContext.Provider>
  // )
}

export const useAuth = () => {
  return useContext(AuthContext);
}
