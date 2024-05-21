import Keycloak from "keycloak-js";

const initOptions = {
  url: "http://localhost:8090/",
  realm: "TurnsManagementApp",
  clientId: "TurnsManagementAppReact",
};

const keycloak = new Keycloak(initOptions);

export const isAuthenticated = async () => {
  try {
    const authenticated = await keycloak.init({
      onLoad: "login-required",
    });
    console.log(authenticated);
    console.log(
      `User is ${authenticated ? "authenticated" : "not authenticated"}`
    );
    return authenticated;
  } catch (error) {
    console.error("Failed to initialize adapter:", error);
  }
};

export const keycloakUserId = () => {
  keycloak.subject;
};

export const login = () => {
  keycloak.login();
};

export const logout = () => {
  keycloak.logout();
};

export const getToken = () => {
  return keycloak.token;
};
