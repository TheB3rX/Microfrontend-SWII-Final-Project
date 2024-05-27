import React from "react";
import { UserScreen } from "userScreen/UserScreen";
import { NavbarComp } from "navbar/NavbarComp";
import { useAuth } from "../hooks/useAuth";
import { logout } from "../auth/keycloak";
import { createTicket, deleteTicket } from "../requests/ticket/TicketRequest";

export const TurnsPage = () => {
  const { authData, dependantList, turnList, loading } = useAuth();

  const addTicketFunction = async (dependant) => {
    console.log(authData.token)
    createTicket({
      token: authData.token,
      userId: authData.userId,
      //TODO Fix the shitty dependant thing
      dependant
    });
  };

  const deleteTicketFunction = async (ticket) => {
    deleteTicket({
      token: authData.token,
      turn: ticket
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <>
        <NavbarComp logoutFunc={logout} />
        <UserScreen
          createTicket={addTicketFunction}
          addFunction={addTicketFunction}
          deleteFunction={deleteTicketFunction}
          dependantList={dependantList}
          ticketList={turnList}
        />
      </>
  );
};
