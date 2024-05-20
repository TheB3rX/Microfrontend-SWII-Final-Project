import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import ButtonGroup from "./components/ButtonGroup";
import CheckboxAll from "./components/CheckboxAll";
import Ticket from "./components/ticket";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const handleAddTicket = () => {
    setTickets([...tickets, { id: tickets.length + 1, checked: allChecked }]);
  };

  const handleAllCheckedChange = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    setTickets(tickets.map(ticket => ({ ...ticket, checked })));
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="test">
          <CheckboxAll allChecked={allChecked} onChange={handleAllCheckedChange} />
          <ButtonGroup handleAddTicket={handleAddTicket} />
        </div>
        <div className="container_checkbox">
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} checked={ticket.checked} />
          ))}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
