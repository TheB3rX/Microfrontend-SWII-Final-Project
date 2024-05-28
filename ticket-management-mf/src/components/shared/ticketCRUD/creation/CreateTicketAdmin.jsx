import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './CreateTicket.css';

export const CreateTicketAdmin = ({ createTicket, onClose, dependantList = [] }) => {
  const [dependant, setDependant] = useState(null);
  const [ticketDate, setTicketDate] = useState('');
  const [ticket, setTicketInput] = useState({
    dependentId: '',
    scheduledDate: ''
  });
  const [errors, setErrors] = useState({});

  console.log("DEPLIST", dependantList)
  const selectList = dependantList.map(element => ({
    value: element.id,
    label: element.username
  }));

  console.log("LIST" ,selectList)

  const validate = () => {
    const newErrors = {};
    if (!ticketDate) newErrors.date = 'Date is required';
    if (!dependant) newErrors.dependant = 'Dependant is required';
    return newErrors;
  };

  const sendCreateTicket = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    createTicket({
      ...ticket,
      scheduledDate: ticketDate,
      dependentId: dependant
    });
    onClose();
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
            className={errors.date ? 'input-error' : ''}
          />
          {errors.date && <div className="error-message">{errors.date}</div>}

          <label className="dependant">Seleccione un dependiente</label>
          <Select
            options={selectList}
            onChange={option => setDependant(option.value)}
            className={errors.dependant ? 'input-error' : ''}
          />

<Select
            options={selectList}
            onChange={option => setDependant(option.value)}
            className={errors.dependant ? 'input-error' : ''}
          />
          {errors.dependant && <div className="error-message">{errors.dependant}</div>}
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
