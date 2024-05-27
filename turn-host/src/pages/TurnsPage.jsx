import React from "react";
import { UserScreen } from "userScreen/UserScreen";
import { NavbarComp } from "navbar/NavbarComp";
import { useAuth } from "../hooks/useAuth";
import { logout } from "../auth/keycloak";
import { createTicket, deleteTicket } from "../requests/ticket/TicketRequest";

export const TurnsPage = () => {
  const { authData, dependantList, turnList, loading } = useAuth();

    console.log(authData.token)
  const addTicketFunction = async (ticket) => {
    try {
      createTicket({
        token: authData.token,
        userId: authData.userId,
        dependentId: ticket.dependentId,
        scheduledDate: ticket.scheduledDate
      });
      console.log('Ticket created:', ticket);
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  const deleteTicketFunction = async (ticket) => {
    try {
      deleteTicket({
        token: authData.token,
        turn: ticket.id
      });
      console.log('Ticket deleted:', ticket.id);
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
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
