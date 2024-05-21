import React, { useEffect, useState } from 'react'
import './DeleteTicket.css'

export const DeleteTicket = () => {
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
            <label name="username">Ticket Name</label> 
            <input type="text" name="ticket-name"/>
          </div>
          <div className='field-group'>
            <label name="username">Ticket Holder</label> 
            <input type="text" name="ticket-holder" onChange={onInputChange} value={ticket.userId}/>
          </div>
          <div className='field-group' id='ticket-date'>
            <label name="username">Ticket date</label> 
            <input type="datetime-local" name="ticket-date"/>
            </div>
          <div className='field-group' id='submit-group'>
            <label name="username">Ticket Code</label> 
            <input type="text" name="ticket-code" onChange={onInputChange} value={ticket.dependentId}/>
          </div>
        </div>
        <button 
          className='action-button' 
          type='button' 
          value='Confirm'
          onClick={() => sendOperation}
        >
          Delete 
        </button>
      </div>
    </>
  )
}
