import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { CreateTicket } from "./components/shared/ticketCRUD/creation/CreateTicket";
import { DeleteTicket } from "./components/shared/ticketCRUD/delete/DeleteTicket";
import { UserScreen } from "./components/user/UserScreen";
import { AdminScreen } from "./components/admin/AdminScreen";

const App = () => {
  const dependantList = [
    { value: '1', label: 'John Doe' },
    { value: '3', label: 'Jane Smith' },
    { value: '2', label: 'Alice Johnson' }
  ];

  const ticketList = [
    { value: '1', label: 'ticket 48', sala: 'sala 1'},
    { value: '3', label: 'ticket 49', sala: 'sala 1' },
    { value: '2', label: 'ticket 50', sala: 'sala 2'}
  ];

  return (
    <div className="container">
      <AdminScreen dependantList={dependantList} ticketList={ticketList} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
