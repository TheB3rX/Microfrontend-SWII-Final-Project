import Keycloak from "keycloak-js";
import { AuthProvider } from "./AuthContext";

const initOptions = {
  url: "http://localhost:8090/",
  realm: "TurnsManagementApp",
  clientId: "TurnsManagementAppReact",
};

export const keycloak = new Keycloak(initOptions);

export const initKeycloak = () => {
  keycloak.init({
    onLoad: 'login-required'
  }).then(
      authenticated => {
        if (authenticated) {
          localStorage.setItem('keycloakToken', keycloak.token);
          localStorage.setItem('keycloakRefreshToken', keycloak.refreshToken);
        } else {
          keycloak.login();
        }
        return authenticated;
      }
    )
}

export const isAuthenticated = async () => {
  try {
    const authenticated = await keycloak.init({
      onLoad: "login-required",
    });
    return authenticated;
  } catch (error) {
    console.error("Failed to initialize adapter:", error);
  }
};

export const keycloakUserId = () => {
  keycloak.subject;
}

export const logout = () => {
    keycloak.logout();
};

export const getToken = () => {
  return keycloak.token;
};
