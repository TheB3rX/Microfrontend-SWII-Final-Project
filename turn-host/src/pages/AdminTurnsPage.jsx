import { AdminScreen } from 'adminScreen/AdminScreen';
import { NavbarComp } from 'navbar/NavbarComp';
import { isAuthenticated, login , logout} from "../auth/keycloak";
import { useEffect } from 'react';

export const AdminTurnsPage = () => {
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
      <h1>Admin</h1>
      <NavbarComp logoutFunc={logout} />
      <AdminScreen/>
    </>
  );

}
