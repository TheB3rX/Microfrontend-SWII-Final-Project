import React, { useEffect, useState } from 'react'
import './DeleteTicket.css'
import Select from 'react-select';

export const DeleteTicket = ({ onClose, ticketList}) => {
  const [ticket, setTicket] = useState('');

  const onInputChange = e => {
      console.log(`Changing: ${e.target}`)
      const { name, value } = e.target;
      setTicketInput(prev => ({
      ...prev,
      [name]: value
      }));
  };
  
  useEffect(() => {
      console.log(ticket)
  }, [ticket])

  return (
    <>
      <div className='ticket-formulary'>
        <div className='formulary-fields'>
          <div className='field-group'>
            <label name="ticket-information">Select your ticket to delete</label> 
            <Select
              options={ticketList} 
              defaultValue={ticketList[0]}
              onChange={option => setTicket(option.value)}
            />
          </div>
        </div>
        <button 
          className='action-button' 
          type='button' 
          value='Confirm'
          onClick={onClose}
        >
          Delete 
        </button>
      </div>
    </>
  )
}
