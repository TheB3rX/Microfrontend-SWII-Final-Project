import React from "react";
import ReactDOM from "react-dom/client";
import { Signup } from "./signup/components/Signup";

const App = () => (
  <>
    <Signup/>
  </>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
