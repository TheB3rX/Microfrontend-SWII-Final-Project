import React, { useState } from 'react';
import './AdminScreen.css';
import Ticket from '../shared/ticketView/Ticket';
import { CheckboxAll } from '../shared/edition/CheckboxAll';
import { ButtonGroup } from '../shared/edition/ButtonGroup';
import { CreateTicketAdmin } from '../shared/ticketCRUD/creation/CreateTicketAdmin';
import { DeleteTicket } from '../shared/ticketCRUD/delete/DeleteTicket';
import { SearchTicket } from '../shared/ticketCRUD/search/SearchTicket';

export const AdminScreen = ({createTicket, dependantList = [], ticketList = [], roomList = [] }) => {
  // Agregar un tercer índice para manejar la visibilidad de SearchTicket
  const [isChildVisible, setIsChildVisible] = useState([false, false, false]);
  const [tickets, setTickets] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const handleToggle = (index) => {
    setIsChildVisible(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  console.log(ticketList);

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
            // onToggleSearch={() => handleToggle(2)} // Índice 2 para SearchTicket
            onToggleAdd={() => handleToggle(0)} 
            onToggleDelete={() => handleToggle(1)}
          />
        </div>
        <div className="container-checkbox">
          {/* {isChildVisible[2] && ( // Condición de renderizado para SearchTicket
            <SearchTicket onClose={() => handleToggle(2)} ticketList={ticketList} />
          )} */}
          {isChildVisible[0] && (
            <CreateTicketAdmin createTicket={createTicket} onClose={() => handleToggle(0)} dependantList={dependantList} ticketList={ticketList} roomList={roomList}/>
           
          )}
          {isChildVisible[1] && (
            <DeleteTicket onClose={() => handleToggle(1)} ticketList={ticketList} />
          )}
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} checked={ticket.checked} />
          ))}
        </div>
      </div>
    </div>
  );
};
