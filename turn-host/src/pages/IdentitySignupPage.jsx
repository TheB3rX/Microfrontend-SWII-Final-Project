import React, { useState } from 'react';
import { SignupIdentityProvider } from 'signup/SignupIdentityProvider';
import { useAuth } from '../hooks/useAuth';
import { addDataToUser } from '../requests/identity_provider/CheckIdentityProvider';

export const IdentitySignupPage = () => {
 const { authData } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: authData?.email || '',
    firstName: '',
    lastName: '',
    organization: '',
  });

  const handleSendIdentityProviderData = (data) => {
    setFormData(data);
    check(data);
  };

  const check = async (data) => {
    if (authData.auth) {
      const dataForm = {
        token: authData.token,
        userId: authData.userId,
        ...data,
      };

      try {
        await addDataToUser(dataForm);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <SignupIdentityProvider sendIdentityProviderData={handleSendIdentityProviderData} />
    </>
  );
};
