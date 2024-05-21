import React from "react";
import './Ticket.css'

const Ticket = ({ checked }) => (
  <div className="checkbox_conter">
    <input type="checkbox" id="miCheckbox1" checked={checked} />
    <div className="user-info">
      <p>Ticket# 36-SK</p>
    </div>
    <div className="entity-info">
      <p>Your EPS - 09:00 AM</p>
    </div>
  </div>
);

export default Ticket; 
