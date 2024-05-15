import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Login from "./login/components/Login";
import { Signup } from "./signup/components/Signup";

const App = () => (
  <div className="container">
    <Login />
    {/* <Signup/> */}
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
