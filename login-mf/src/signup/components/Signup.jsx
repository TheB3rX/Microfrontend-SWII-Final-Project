import React, { useState } from 'react';
import { createUser } from '../../api/UserCreationApi';
import { serviceAccountLogin } from '../../api/LoginApi';
import './Signup.css';
import { getToken } from '../../auth/keycloak';

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(name, value); // Pass the name and value to validateInput
  };

  const validateInput = (name, value) => { // Adjust validateInput to accept name and value
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password do not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password do not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, username, firstName, lastName, password } = input;
    
    try {
      const token = await serviceAccountLogin();
      createUser({ email, username, firstName, lastName, password, token})
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className='formulary' onSubmit={handleSubmit}>
        <label>
          <h3>Email</h3>
          <input 
            className='input-field'
            type="email" 
            name="email" 
            value={input.email} 
            onChange={onInputChange}
            onBlur={() => validateInput('email', input.email)} // Manually call validateInput on blur
          />
          {error.email && <span className='err'> {error.email}</span>}
        </label>
        <label>
          <h3>Username</h3>
          <input 
            className='input-field'
            type="text" 
            name="username" 
            value={input.username} 
            onChange={onInputChange}
            onBlur={() => validateInput('username', input.username)} // Manually call validateInput on blur
          />
          {error.username && <span className='err'> {error.username}</span>}
        </label>
        <label>
          <h3>First name</h3>
          <input 
            className='input-field'
            type="text" 
            name="firstName" 
            value={input.firstName} 
            onChange={onInputChange}
            onBlur={() => validateInput('firstName', input.firstName)} // Manually call validateInput on blur
          />
          {error.firstName && <span className='err'> {error.firstName}</span>}
        </label>
        <label>
          <h3>Last name</h3>
          <input 
            className='input-field'
            type="text" 
            name="lastName" 
            value={input.lastName} 
            onChange={onInputChange}
            onBlur={() => validateInput('lastName', input.lastName)} // Manually call validateInput on blur
          />
          {error.lastName && <span className='err'> {error.lastName}</span>}
        </label>
        <label>
          <h3>Password</h3>
          <input 
            className='input-field'
            name="password" 
            value={input.password} 
            type={showPassword ? "text" : "password"} 
            onChange={onInputChange}
            onBlur={() => validateInput('password', input.password)} // Manually call validateInput on blur
          />
          {error.password && <span className='err'> {error.password}</span>}
        </label>
        <label>
          <h3>Confirm Password</h3>
          <input 
            className='input-field'
            name="confirmPassword" 
            value={input.confirmPassword} 
            type={showPassword ? "text" : "password"} 
            onChange={onInputChange}
            onBlur={() => validateInput('confirmPassword', input.confirmPassword)} // Manually call validateInput on blur
          />
          {error.confirmPassword && <span className='err'> {error.confirmPassword}</span>}
        </label>
        <div id='show-pw-text'>
          <p>Show password</p>          
          <input 
            id='check' 
            type='checkbox' 
            checked={showPassword} 
            onChange={() => setShowPassword(prev => !prev)}
          />
        </div>
        <div className='submit-button-div'>
          <input id="submit-button" type="submit" name="submit" value="Submit"/>
        </div>
      </form>
    </>
  );
};

