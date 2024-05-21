import React, { useState } from 'react'
import { CheckboxAll } from '../shared/edition/CheckboxAll';
import { ButtonGroup } from '../shared/edition/ButtonGroup';
import Ticket from '../shared/ticketView/Ticket';

export const AdminScreen = () => {
  const [tickets, setTickets] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const handleAddTicket = () => {
    setTickets([...tickets, { id: tickets.length + 1, checked: allChecked }]);
  };

  const handleAllCheckedChange = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    setTickets(tickets.map(ticket => ({ ...ticket, checked })));
  };

  return (
    <div>
      <div className="tickets-container">
        <div className="option-menu">
          <CheckboxAll allChecked={allChecked} onChange={handleAllCheckedChange} />
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
