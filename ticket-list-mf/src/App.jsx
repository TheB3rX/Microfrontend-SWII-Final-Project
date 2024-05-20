import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import ButtonGroup from "./components/ButtonGroup";
import Ticket from "./components/Ticket";

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
          
          <ButtonGroup handleAddTicket={handleAddTicket} />
        </div>
        <div className="grid-container">
          {tickets.map((ticket, index) => (
            <div key={ticket.id} className={`grid-item ${index % 2 === 0 ? "left" : "right"}`}>
              <Ticket  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
