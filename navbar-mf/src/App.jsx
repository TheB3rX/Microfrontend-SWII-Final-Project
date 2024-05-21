<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Navbar } from "./Navbar/Navbar";

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      {/* Resto del contenido de tu aplicación */}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
=======
import ReactDOM from "react-dom/client";
import { NavbarComp } from "./Navbar/NavbarComp";
import { BrowserRouter } from "react-router-dom";

const App = () => <NavbarComp />;

ReactDOM.createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
>>>>>>> origin/TheB3rX-Refactor-Ticket-management
