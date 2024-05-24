import React from 'react'
import { SignupIdentityProvider } from 'signup/SignupIdentityProvider'
import { getToken, getUserEmail, keycloakUserId } from '../auth/keycloak'
import { addDataToUser } from '../requests/identity_provider/CheckIdentityProvider'

export const IdentitySignupPage = () => {
  const check = (formData) => {
    try {
      const dataForm = {
        token: getToken(),
        userId: keycloakUserId,
        username: formData.username,
        email: getUserEmail,
        firstName: formData.firstName,
        lastName: formData.lastName,
        organization: formData.organization
      }

      addDataToUser({
        token: dataForm.token,
        userId: dataForm.userId,
        username: dataForm.username,
        email: dataForm.email,
        firstName: dataForm.firstName,
        lastName: dataForm.lastName,
        organization: dataForm.organization
      })

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <SignupIdentityProvider SendIdentityProviderData={check}/>
    </>
  )
}
