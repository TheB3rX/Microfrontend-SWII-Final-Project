import React, { useState } from 'react';
import { createUser } from '../../api/UserCreationApi';
import { getToken } from '../../auth/keycloak';
const {REACT_APP_USERNAME} = process.env;

export const Signup = () => {
  console.log(REACT_APP_USERNAME);
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

  const handleSubmit = (event) => {
    event.preventDefault();
   // Extract values from the input state
    const { email, username, firstName, lastName, password } = input;
    const token = getToken;
    
    // Alert or perform any other actions with the extracted values
    alert(`Email: ${email}, Username: ${username}, Password: ${password}`);
    
    // Call the createUser function with the input values
    createUser({ email, username, firstName, lastName, password, token});  
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h3>Email</h3>
        <input 
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
          name="confirmPassword" 
          value={input.confirmPassword} 
          type={showPassword ? "text" : "password"} 
          onChange={onInputChange}
          onBlur={() => validateInput('confirmPassword', input.confirmPassword)} // Manually call validateInput on blur
        />
        {error.confirmPassword && <span className='err'> {error.confirmPassword}</span>}
      </label>
      <div>
        <div id='show-pw-text'>
          Show password 
          <input 
            id='check' 
            type='checkbox' 
            checked={showPassword} 
            onChange={() => setShowPassword(prev => !prev)}
          />
        </div>
        <input type="submit" name="submit" value="Submit"/>
      </div>
    </form>
  );
};

