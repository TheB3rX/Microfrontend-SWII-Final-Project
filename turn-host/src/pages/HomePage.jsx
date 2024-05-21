import { useEffect } from "react";
import { isAuthenticated, login } from "../auth/keycloak";

export const HomePage = () => {
  useEffect(() => {
    
    const authenticated = async () => {
      return await isAuthenticated();
    }

    const auth = authenticated();
    if (!auth) {
      login();
    }
  }, []);

  return <div>Home Page xD </div>;
};
