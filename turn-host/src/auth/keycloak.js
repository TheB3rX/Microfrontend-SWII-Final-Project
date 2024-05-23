import Keycloak from "keycloak-js";

const initOptions = {
  url: "http://localhost:8090/",
  realm: "TurnsManagementApp",
  clientId: "TurnsManagementAppReact",
};

const keycloak = new Keycloak(initOptions);

let initPromise = null;

export const isAuthenticated = async () => {
  if (!initPromise) {
    initPromise = keycloak.init({
      onLoad: "login-required",
    });
  }
  const authenticated = await initPromise;
  console.log(authenticated);
  console.log(`User is ${authenticated ? "authenticated" : "not authenticated"}`);
  return authenticated;
};

export const keycloakUserId = () => keycloak.subject;

export const login = () => keycloak.login();

export const logout = () => keycloak.logout();

export const getToken = () => keycloak.token;
