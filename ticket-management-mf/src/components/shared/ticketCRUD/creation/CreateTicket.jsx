import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './CreateTicket.css';

export const CreateTicket = ({ onClose, dependantList=[], ticketList=[]}) => {
  const [dependant, setDependant] = useState('');
  const [ticket, setTicketInput] = useState({
    userId: '',
    dependentId: '',
  });

  const ist = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }  
  ];

  const onInputChange = e => {
    const { name, value } = e.target;
    setTicketInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClick = () => {
    console.log("Este botón se oprimió");
    onClose();
  };

  useEffect(() => {
    console.log(ticket);
  }, [ticket]);

  return (
    <div className='ticket-formulary'>
      <div className='formulary-fields'>
        <div className='field-group' id='dependant-selector'>
          <label className="ticket-date">Fecha:</label>
          <input type="datetime-local" min="08:00" max="18:00" id="date" name="ticket-date" required/>
          <label className="dependant">Seleccione un dependiente</label> 
          <Select 
            options={dependantList} 
            defaultValue={dependantList[0]}
            onChange={option => setDependant(option.value)}
          />
        </div>
        {/* Uncomment and complete these fields if needed */}
        {/* <div className='field-group' id='ticket-date'>
          <label name="username">Ticket date</label>
          <input type="datetime-local" name="ticket-date"/>
        </div>
        <div className='field-group' id='submit-group'>
          <label name="username">Ticket Code</label>
          <input type="text" name="ticket-code" onChange={onInputChange} value={ticket.dependentId}/>
        </div> */}
      </div>
      <button 
        className='action-button' 
        type='button' 
        onClick={handleClick}
      >
        Create
      </button>
    </div>
  );
};
