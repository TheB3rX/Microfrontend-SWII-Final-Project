import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Login from "./login/components/Login";
import { Signup } from "./signup/components/Signup";

const App = () => (
  <>
    <Signup/>
    {/* <Login/> */}
  </>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
