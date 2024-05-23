import React, { useEffect, useState } from 'react'
import './DeleteTicket.css'

export const DeleteTicket = ({ onClose }) => {
    const [ticket, setTicketInput] = useState({
        userId: '',
        dependentId: '',
    });

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
            <label name="ticket-information">Your ticket</label> 
            <input type="text" name="ticket-name" readOnly/>
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
