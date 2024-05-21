import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../auth/AuthContext"

export const Routes = () => {
  const { token } = useAuth();

  const publicRoutes = [
    {
      path: "/about-us",
      element: <div>About us</div>

    },
    {
      path: "/service",
      element: <div>Service</div>
    }
  ] 

  const authenticatedUsersRoutes = [
    {
      path: "/your-tickets",
      element: <div>About us</div>

    },
    {
      path: "/create-ticket",
      element: <div>Create your ticket</div>
    },
    {
      path: "/",
      element: <div>Home</div>
    },
  ]

  const notAuthenticatedUsersRoutes = [
    {
      path: "/signup",
      element: <div>About us</div>

    },
    {
      path: "/login",
      element: <div>About us</div>

    },
  ]

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!token ? notAuthenticatedUsersRoutes : []),
    ...authenticatedUsersRoutes,
  ])

  return <RouterProvider router={router} />;
}
