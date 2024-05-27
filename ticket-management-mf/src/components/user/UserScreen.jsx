import React, { useState } from 'react';
import './UserScreen.css';
import Ticket from '../shared/ticketView/Ticket';
import { CheckboxAll } from '../shared/edition/CheckboxAll';
import { ButtonGroup } from '../shared/edition/ButtonGroup';
import { CreateTicket } from '../shared/ticketCRUD/creation/CreateTicket';
import { DeleteTicket } from '../shared/ticketCRUD/delete/DeleteTicket';

export const UserScreen = ({createTicket, dependantList = [], ticketList = [] }) => {
  const [isChildVisible, setIsChildVisible] = useState([false, false]);
  const [tickets, setTickets] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const handleToggle = (index) => {
    setIsChildVisible(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleAddTicket = () => {
    setTickets([...tickets, {
      id: tickets.length + 1,
      checked: allChecked 
    }]);
  };

  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    setTickets(tickets.map(ticket => ({
      ...ticket,
      checked: checked
    })));
  };

  return (
    <div>
      <div className="tickets-container">
        <div className="option-menu">
          <CheckboxAll allChecked={allChecked} onChange={handleAllChecked} />
          <ButtonGroup 
            handleAddTicket={handleAddTicket} 
            onToggleAdd={() => handleToggle(0)} 
            onToggleDelete={() => handleToggle(1)}
          />
        </div>
        <div className="container-checkbox">
          {isChildVisible[0] && (
            <CreateTicket createTicket={createTicket} onClose={() => handleToggle(0)} dependantList={dependantList} />
          )}
          {isChildVisible[1] && (
            <DeleteTicket onClose={() => handleToggle(1)} ticketList={ticketList} />
          )}
          {ticketList.map((ticket) => (
            <Ticket key={ticket.id} id={ticket.id} date={ticket.scheduledDate} checked={ticket.checked} />
          ))}
        </div>
      </div>
    </div>
  );
};
