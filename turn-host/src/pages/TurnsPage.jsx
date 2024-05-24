import React from "react";
import { UserScreen } from "userScreen/UserScreen";
import { NavbarComp } from "navbar/NavbarComp";
import { useAuth } from "../hooks/useAuth";
import { logout } from "../auth/keycloak";

export const TurnsPage = () => {
  const { authData, dependantList, loading } = useAuth();

  const ist = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }  
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarComp logoutFunc={logout} />
      <UserScreen dependantList={dependantList} ticketList={ist} />
    </>
  );
};
