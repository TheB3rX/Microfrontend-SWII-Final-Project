import React, { useState } from 'react'
import './SignupIdentityProvider.css'

export const SignupIdentityProvider = ({SendIdentityProviderData}) => {
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
    // Adjust validateInput to accept name and value
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
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
    SendIdentityProviderData();
  }

  return (
    <>
      <form className="formulary" >
         <label>
            <h3>Username</h3>
            <input
              className="input-field"
              type="text"
              name="username"
              value={input.username}
              onChange={onInputChange}
              onBlur={() => validateInput("username", input.username)} // Manually call validateInput on blur
            />
            {error.username && <span className="err"> {error.username}</span>}
          </label>
          <label>
            <h3>First name</h3>
            <input
              className="input-field"
              type="text"
              name="firstName"
              value={input.firstName}
              onChange={onInputChange}
              onBlur={() => validateInput("firstName", input.firstName)} // Manually call validateInput on blur
            />
            {error.firstName && <span className="err"> {error.firstName}</span>}
          </label>
          <label>
            <h3>Last name</h3>
            <input
              className="input-field"
              type="text"
              name="lastName"
              value={input.lastName}
              onChange={onInputChange}
              onBlur={() => validateInput("lastName", input.lastName)} // Manually call validateInput on blur
            />
            {error.lastName && <span className="err"> {error.lastName}</span>}
          </label>
          <label>
            <h3>Organization</h3>
            <input
              className="input-field"
              type="text"
              name="organization"
              value={input.organization}
              onChange={onInputChange}
              onBlur={() => validateInput("lastName", input.organization)} // Manually call validateInput on blur
            />
            {error.organization && (
              <span className="err"> {error.organization}</span>
            )}
          </label>
       <div className="submit-button-div">
            <input
              id="submit-button"
              type="button"
              name="submit"
              value="Submit"
              onClick={handleSubmit(event)}
            />
        </div>
      </form>{" "}
    </>
  )
}
