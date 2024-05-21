import React from "react";
import ReactDOM from "react-dom/client";
import { Signup } from "./signup/components/Signup";
import './styles.css';

const App = () => (
  <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    </style>
    <Signup/>
    {/* <Login/> */}
  </>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
