import React, { useState , useEffect} from 'react'
import './TicketCreation.css';

export const TicketCRUD = ({type, text}) => {

  // Ticket CRUD recieves the type and text of the ticket
  // It can be: creation, update and deletion, every one of them has it's own css vars
  const [buttonColor, setButtonColor] = useState();

  const checkOperationType = (type) => {
    if (type === 'creation') {
      setButtonColor("var(--confirm-color)");
    } else if (type === 'update') {
      setButtonColor("var(--edit-color)");
    } else if (type === 'deletion') {
      setButtonColor("var(--cancel-color)");
    }   
  }

  useEffect(() => {
    console.log("Type: ", type);
    checkOperationType(type);
  }, [type]);

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
            <input type="text" name="ticket-holder"/>
          </div>
          <div className='field-group' id='ticket-date'>
            <label name="username">Ticket date</label> 
            <input type="datetime-local" name="ticket-date"/>
            </div>
          <div className='field-group' id='submit-group'>
            <label name="username">Ticket Code</label> 
            <input type="text" name="ticket-code"/>
          </div>
        </div>
        <button 
          className='action-button' 
          type='button' 
          value='Confirm'
          onClick={() => console.log("Confirm")}
          style={{backgroundColor: buttonColor}}
          >
            {text}
        </button>
      </div>
    </>
  )
}