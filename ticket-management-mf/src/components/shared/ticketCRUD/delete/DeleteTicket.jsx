import React, { useState } from 'react';
import './DeleteTicket.css';
import Select from 'react-select';

export const DeleteTicket = ({ deleteTicket, onClose, ticketList = [] }) => {
  const [ticket, setTicket] = useState(null);
  const [errors, setErrors] = useState({});

  const selectList = ticketList.map(element => ({
    value: element.id,
    label: element.scheduledDate
  }));

  const validate = () => {
    const newErrors = {};
    if (!ticket) newErrors.ticket = 'Please select a ticket to delete';
    return newErrors;
  };

  const handleDelete = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    deleteTicket({
      id: ticket
    });
    onClose();
  };

  return (
    <>
      <div className='ticket-formulary'>
        <div className='formulary-fields'>
          <div className='field-group'>
            <label htmlFor="ticket-information">Select your ticket to delete</label> 
            <Select
              options={selectList}
              onChange={option => setTicket(option.value)}
              className={errors.ticket ? 'input-error' : ''}
            />
            {errors.ticket && <div className="error-message">{errors.ticket}</div>}
          </div>
        </div>
        <button 
          className='action-button' 
          type='button' 
          onClick={handleDelete}
        >
          Delete 
        </button>
      </div>
    </>
  );
};
