import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to='/home' />;
  }

  return <Outlet/>
};
