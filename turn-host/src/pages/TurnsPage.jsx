import React from "react";
import { UserScreen } from "userScreen/UserScreen";
import { NavbarComp } from "navbar/NavbarComp";
import { useAuth } from "../hooks/useAuth";
import { logout } from "../auth/keycloak";
import { createTicket, deleteTicket } from "../requests/ticket/TicketRequest";

export const TurnsPage = () => {
  const { authData, dependantList, ticketList, loading } = useAuth();

  const addTicketFunction = (dependant) => {
    createTicket({
      token: authData.token, 
      userId: authData.userId, 
      dependentI: dependant
    })
  };
  const deleteTicketFunction = (ticket) => {
    deleteTicket({
      token: authData.token,
      turn: ticket
    })
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarComp logoutFunc={logout} />
      <UserScreen 
        addFunction={addTicketFunction} 
        deleteFunction={deleteTicketFunction} 
        dependantList={dependantList} 
        ticketList={ticketList} 
      />
    </>
  );
};
