import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { TicketCreation } from "./components/ticket/TicketCreation";

const App = () => (
  <div className="container">
    <TicketCreation/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
