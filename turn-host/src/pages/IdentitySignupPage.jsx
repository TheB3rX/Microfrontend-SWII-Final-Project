import React from 'react'
import { SignupIdentityProvider } from 'signup/SignupIdentityProvider'

export const IdentitySignupPage = () => {
  const check = () => {
    console.log("Checking");
  }
  return (
    <>
      <SignupIdentityProvider SendIdentityProviderData={check}/>
    </>
  )
}
