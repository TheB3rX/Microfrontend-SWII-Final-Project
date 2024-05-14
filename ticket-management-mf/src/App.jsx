import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { TicketCRUD } from "./components/ticket/TicketCRUD";

const App = () => (
  <div className="container">
    <TicketCRUD
      type='creation' 
      text='Create'
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
