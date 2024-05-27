import React, { useEffect, useState } from 'react'
import './DeleteTicket.css'
import Select from 'react-select';

export const DeleteTicket = ({ onClose, ticketList}) => {
  const [ticket, setTicket] = useState('');

  const selectList = ticketList.map(element => ({
    value: element.id,
    label: element.scheduledDate
  }));

  const handleDelete = () => {
    console.log("Sent delete, ticket is: ", ticket)
    onClose;
  }

  return (
    <>
      <div className='ticket-formulary'>
        <div className='formulary-fields'>
          <div className='field-group'>
            <label name="ticket-information">Select your ticket to delete</label> 
            <Select
              options={selectList} 
              onChange={option => setTicket(option.value)}
            />
          </div>
        </div>
        <button 
          className='action-button' 
          type='button' 
          value='Confirm'
          onClick={handleDelete}
        >
          Delete 
        </button>
      </div>
    </>
  )
}
