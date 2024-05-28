import React, { useEffect, useState } from 'react';
import './SearchTicket.css';
import Select from 'react-select';

export const SearchTicket = ({ onClose, ticketList }) => {
  const [inputSala, setInputSala] = useState('');
  const [foundTickets, setFoundTickets] = useState([]);

  const onInputChange = e => {
    const { value } = e.target;
    setInputSala(value);
  };

  const handleSearch = () => {
    const results = ticketList.filter(ticket => ticket.sala && ticket.sala.toLowerCase().includes(inputSala.toLowerCase()));
    setFoundTickets(results);
  };

  return (
    <>
      <div className='ticket-formulary'>
        <div className='formulary-fields'>
          <div className='field-group'>
            <label htmlFor="sala-name">Nombre de la sala</label>
            <input 
              type="text" 
              value={inputSala} 
              onChange={onInputChange} 
              placeholder="Enter sala name" 
              id="sala-name"
            />
            <button 
              className='search-button' 
              type='button' 
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        {foundTickets.length > 0 && (
          <table className='ticket-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Label</th>
                <th>Sala</th>
              </tr>
            </thead>
            <tbody>
              {foundTickets.map(ticket => (
                <tr key={ticket.value}>
                  <td>{ticket.value}</td>
                  <td>{ticket.label}</td>
                  <td>{ticket.sala}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button 
          className='action-button' 
          type='button' 
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </>
  );
};
