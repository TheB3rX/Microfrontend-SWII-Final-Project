import React from "react";
import './Ticket.css'

const Ticket = ({ id, date, checked }) => (
  <div className="checkbox_conter">
    <input type="checkbox" id="miCheckbox1" checked={checked} />
    <div className="user-info">
      <p>{id}</p>
    </div>
    <div className="entity-info">
      <p>{date}</p>
    </div>
  </div>
);

export default Ticket; 
