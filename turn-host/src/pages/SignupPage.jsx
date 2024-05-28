import React from 'react'
import { Signup } from 'signup/Signup'

export const SignupPage = ({createNewUser}) => {
  return (
    <>
      <Signup createNewUser={createNewUser} />
    </>
  )
}
