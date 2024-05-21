import { UserScreen } from "userScreen/UserScreen";
import { NavbarComp } from "navbar/NavbarComp";
import { useEffect } from "react";
import { isAuthenticated, login , logout} from "../auth/keycloak";

export const TurnsPage = () => {
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
      <UserScreen />
    </>
  );
};
