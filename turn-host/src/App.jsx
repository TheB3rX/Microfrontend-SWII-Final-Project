import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TurnsPage } from './pages/TurnsPage';
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { SignupPage } from "./pages/SignupPage";
import { AdminTurnsPage } from "./pages/AdminTurnsPage";
import { CreatePage } from "./pages/CreatePage";
import { DeletePage } from "./pages/DeletePage";
import { IdentitySignupPage } from "./pages/IdentitySignupPage";
import { IdentityProtectedRoute } from "./routes/IdentityProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import { AdminProtectedRoute } from "./routes/AdminProtectedRoute";
import { UserProtectedRoute } from "./routes/UserProtectedRoute";

const App = () => (
  <AuthProvider>
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<UserProtectedRoute />}>
          <Route path="/" element={<TurnsPage />} />
          <Route path="/turns" element={<TurnsPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/delete" element={<DeletePage />} />
        </Route>
        <Route element={<AdminProtectedRoute />}>
          <Route path="/adminTurns" element={<AdminTurnsPage />} />
        </Route>
      </Route>
      <Route element={<IdentityProtectedRoute />}>
        <Route path="/complete-information" element={<IdentitySignupPage />} exact />
      </Route>
      <Route path="/signup" element={<SignupPage />} exact />
    </Routes>
  </AuthProvider>
);

ReactDOM.createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
