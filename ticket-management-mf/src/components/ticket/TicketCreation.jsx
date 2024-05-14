import React from 'react'
import './TicketCreation.css';

export const TicketCreation = () => {
  return (
    <>
      <div className='ticket-formulary'>
        <div className='formulary-fields'>
          <div className='field-group'>
            <label for="username">Ticket Name</label> 
            <input type="text" name="ticket-name" value=""/>
          </div>
          <div className='field-group'>
            <label for="username">Ticket Holder</label> 
            <input type="text" name="ticket-holder" value=""/>
          </div>
          <div className='field-group' id='ticket-date'>
            <label for="username">Ticket date</label> 
            <input type="datetime-local" name="ticket-date" value=""/>
            </div>
          <div className='field-group' id='submit-group'>
            <label for="username">Ticket Code</label> 
            <input type="text" name="ticket-code" value=""/>
          </div>
        </div>
        <button 
          className='action-button' 
          type='button' 
          value='Confirm'
          >
          Create
        </button>
      </div>
    </>
  )
}
