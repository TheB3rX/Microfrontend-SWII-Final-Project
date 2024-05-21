import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../auth/keycloak'

export const ProtectedRoute = () => {
  console.log(isAuthenticated)
  return (
    isAuthenticated ? <Outlet/>: <Navigate to='/signup'/>
  )
}
