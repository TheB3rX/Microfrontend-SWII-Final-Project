import React from "react";
import ReactDOM from "react-dom/client";
import { Signup } from "signup/Signup";

const App = () => {
  return <Signup />;
};


ReactDOM.createRoot(document.getElementById("app")).render(<App />);
