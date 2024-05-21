import { useEffect } from "react";
import { isAuthenticated, login, logout } from "../auth/keycloak";
import { NavbarComp } from "navbar/NavbarComp";

export const HomePage = () => {
  useEffect(() => {
    const authenticated = async () => {
      return await isAuthenticated();
    };

    const auth = authenticated();
    if (!auth) {
      login();
    }
  }, []);

  return (
    <>
      <NavbarComp logoutFunc={logout} />
      <div>Home Page xD </div>
    </>
  );
};
