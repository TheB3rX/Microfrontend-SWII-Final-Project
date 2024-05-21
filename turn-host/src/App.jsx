import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import {TurnsPage} from './pages/TurnsPage'


const App = () => (
  <Routes>
    <Route path="/" element={<TurnsPage />} />
    <Route path="/turns" element={<TurnsPage />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
