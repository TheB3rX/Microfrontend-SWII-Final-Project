import React, { useState } from 'react'
import './UserScreen.css'
import Ticket from '../shared/ticketView/Ticket';
import { CheckboxAll } from '../shared/edition/CheckboxAll';
import { ButtonGroup } from '../shared/edition/ButtonGroup';

export const UserScreen = () => {
  const [tickets, setTickets] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const handleAddTicket = () => {
    setTickets([...tickets, {
      id: tickets.length + 1,
      checked: allChecked 
    }]);
  }

  const handleAllChecked = () => {
    const checked = e.target.checked;
    setAllChecked(checked);
    setTickets(tickets.map(ticket => ({
     ...ticket,
      checked: checked
    })));
  }
    
  return (
    <div>
      <div className="tickets-container">
        <div className="option-menu">
          <CheckboxAll allChecked={allChecked} onChange={handleAllChecked} />
          <ButtonGroup handleAddTicket={handleAddTicket} />
        </div>
        <div className="container-checkbox">
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} checked={ticket.checked} />
          ))}
        </div>
      </div>
    </div>
  )
}
