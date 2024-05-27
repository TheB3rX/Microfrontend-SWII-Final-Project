import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './CreateTicket.css';

export const CreateTicket = ({ createTicket, onClose, dependantList = [] }) => {
  const [dependant, setDependant] = useState('');
  const [ticketDate, setTicketDate] = useState('');
  const [ticket, setTicketInput] = useState({
    dependentId: '',
    scheduledDate: ''
  });

  const sendCreateTicket = () => {
    createTicket({
      ticket
    });
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    setTicketInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onDateChange = e => {
    const value = e.target.value;
    setTicketDate(value);
  };

  useEffect(() => {
    console.log(ticket);
  }, [ticket]);

  return (
    <div className='ticket-formulary'>
      <div className='formulary-fields'>
        <div className='field-group' id='dependant-selector'>
          <label className="ticket-date">Fecha:</label>
          <input 
            type="datetime-local" 
            id="date" 
            name="ticket-date" 
            required 
            onChange={onDateChange} 
          />
          <label className="dependant">Seleccione un dependiente</label>
          <Select 
            options={dependantList} 
            defaultValue={dependantList[0]}
            onChange={option => setDependant(option.value)}
          />
        </div>
      </div>
      <button 
        className='action-button' 
        type='button' 
        onClick={sendCreateTicket}
      >
        Create
      </button>
    </div>
  );
};
