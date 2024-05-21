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
