import React, { useState , useEffect} from 'react'
import './TicketCreation.css';
import { TicketCreationAPI } from '../../api/TicketCRUDApi';

export const TicketCRUD = ({type, text}) => {

  // Ticket CRUD recieves the type and text of the ticket
  // It can be: creation, update and deletion, every one of them has it's own css vars
  const [buttonColor, setButtonColor] = useState();
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

  const checkOperationType = (type) => {
    if (type === 'creation') {
      setButtonColor("var(--confirm-color)");
    } else if (type === 'update') {
      setButtonColor("var(--edit-color)");
    } else if (type === 'deletion') {
      setButtonColor("var(--cancel-color)");
    }   
  }

  const sendOperation = () => {
    console.log("OPERATION")
    const { userId, dependentId } = ticket; 
    if (type === 'creation') {
      TicketCreationAPI({userId, dependentId})
    } else if (type === 'update') {
      console.log("Update")
    } else if (type === 'deletion') {
      console.log("Delete")
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
          style={{backgroundColor: buttonColor}}
        >
          {text}
        </button>
      </div>
    </>
  )
}
