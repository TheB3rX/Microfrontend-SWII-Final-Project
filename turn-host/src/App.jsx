import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {TurnsPage} from './pages/TurnsPage'
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { SignupPage } from "./pages/SignupPage";
import { AdminTurnsPage } from "./pages/AdminTurnsPage";
import { CreatePage } from "./pages/CreatePage";
import { DeletePage } from "./pages/DeletePage";
import { IdentitySignupPage } from "./pages/IdentitySignupPage";


const App = () => (
  <Routes>
    <Route element={<ProtectedRoute/>}>
      <Route element={<TurnsPage/>} path="/" exact/>
      <Route path="/turns" element={<TurnsPage />} />
      <Route path="/adminTurns" element={<AdminTurnsPage/>} />
      <Route path="/create" element={<CreatePage/>} />
      <Route path="/delete" element={<DeletePage/>} />
      <Route element={<IdentitySignupPage/>} path="/complete-information" exact />
    </Route>
    {/* For when someone has identity signed up and havent completed information */}
    <Route element={<SignupPage/>} path="/signup" exact />
  </Routes>
);

ReactDOM.createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
