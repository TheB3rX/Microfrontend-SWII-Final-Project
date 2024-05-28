import React, { useState } from 'react';
import './SignupIdentityProvider.css';

export const SignupIdentityProvider = ({ sendIdentityProviderData }) => {
  const [input, setInput] = useState({
    username: "",
    firstName: "",
    lastName: "",
    organization: "",
  });

  const [error, setError] = useState({
    username: "",
    firstName: "",
    lastName: "",
    organization: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(name, value); // Pass the name and value to validateInput
  };

  const validateInput = (name, value) => {
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;
        case "firstName":
          if (!value) {
            stateObj[name] = "Please enter First Name.";
          }
          break;
        case "lastName":
          if (!value) {
            stateObj[name] = "Please enter Last Name.";
          }
          break;
        case "organization":
          if (!value) {
            stateObj[name] = "Please enter Organization.";
          }
          break;
        default:
          break;
      }

      return stateObj;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsValid = Object.values(input).every(value => value !== "");
    if (!allFieldsValid) {
      Object.keys(input).forEach(name => validateInput(name, input[name]));
      return;
    }
    sendIdentityProviderData(input);
  }

  return (
    <form className="formulary" onSubmit={handleSubmit}>
      <label>
        <h3>Username</h3>
        <input
          className="input-field"
          type="text"
          name="username"
          value={input.username}
          onChange={onInputChange}
          onBlur={() => validateInput("username", input.username)}
        />
        {error.username && <span className="err">{error.username}</span>}
      </label>
      <label>
        <h3>First name</h3>
        <input
          className="input-field"
          type="text"
          name="firstName"
          value={input.firstName}
          onChange={onInputChange}
          onBlur={() => validateInput("firstName", input.firstName)}
        />
        {error.firstName && <span className="err">{error.firstName}</span>}
      </label>
      <label>
        <h3>Last name</h3>
        <input
          className="input-field"
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={onInputChange}
          onBlur={() => validateInput("lastName", input.lastName)}
        />
        {error.lastName && <span className="err">{error.lastName}</span>}
      </label>
      <label>
        <h3>Organization</h3>
        <input
          className="input-field"
          type="text"
          name="organization"
          value={input.organization}
          onChange={onInputChange}
          onBlur={() => validateInput("organization", input.organization)}
        />
        {error.organization && <span className="err">{error.organization}</span>}
      </label>
      <div className="submit-button-div">
        <input
          id="submit-button"
          type="submit"
          name="submit"
          value="Submit"
        />
      </div>
    </form>
  );
}
