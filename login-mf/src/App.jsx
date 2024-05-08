import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Login from "./login/components/Login";
import { Signup } from "./signup/components/Signup";

const App = () => (
  <div className="container">
    <Signup/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
