import React from "react";
import { UserScreen } from "userScreen/UserScreen";
import { NavbarComp } from "navbar/NavbarComp";
import { useAuth } from "../hooks/useAuth";
import { logout } from "../auth/keycloak";
import { createTicket, deleteTicket } from "../requests/ticket/TicketRequest";

export const TurnsPage = () => {
  const { authData, dependantList, turnList, loading } = useAuth();

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

   const deleteTicketFunction = async (ticketId) => {
    try {
      deleteTicket({
        token: authData.token,
        turn: ticketId
      });
      console.log('Ticket deleted:', ticketId);
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
