import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { CreateTicket } from "./components/shared/ticketCRUD/creation/CreateTicket";
import { DeleteTicket } from "./components/shared/ticketCRUD/delete/DeleteTicket";
import { EditTicket } from "./components/shared/ticketCRUD/edit/EditTicket";
import { UserScreen } from "./components/user/UserScreen";
import { AdminScreen } from "./components/admin/AdminScreen";

const App = () => (
  <div className="container">
    {/* Ticket Works */}
    {/* <CreateTicket/> */}
    {/* <DeleteTicket/> */}
    {/* <EditTicket/> */}
    {/* <UserScreen/> */}
    <AdminScreen/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
