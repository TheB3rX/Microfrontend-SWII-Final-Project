import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Signup from "./pages/signup/Signup";
import { MyTickets } from "./pages/tickets/MyTickets";
import { GeneralTickets } from "./pages/tickets/GeneralTickets";
import { PrivateRoutes } from "./routes/ProtectedRoute";
import { LoginPage } from "./pages/login/Login";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<MyTickets />} />
            <Route path="/ticket-table" element={<GeneralTickets />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
