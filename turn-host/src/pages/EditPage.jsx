import { EditTicket } from 'editModal/EditTicket'
import { NavbarComp } from 'navbar/NavbarComp';
import React from 'react'
import { useEffect } from 'react';
import { isAuthenticated, login , logout} from "../auth/keycloak";

export const EditPage = () => {
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
      <EditTicket/>
    </>
  )
}
