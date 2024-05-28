import React, { useState } from 'react';
import { SignupIdentityProvider } from 'signup/SignupIdentityProvider';
import { useAuth } from '../hooks/useAuth';
import { addDataToUser } from '../requests/identity_provider/CheckIdentityProvider';

export const IdentitySignupPage = () => {
  const { authData } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    organization: '',
  });

  const check = async () => {
    if (authData.auth) {
      const dataForm = {
        token: authData.token,
        userId: authData.userId,
        ...formData,
      };

      try {
        console.log(
          dataForm
        )
        await addDataToUser(dataForm);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <SignupIdentityProvider SendIdentityProviderData={check} />
    </>
  );
};
