import React, { useState } from 'react'
export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [input, setInput] = useState({
    email:'',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
  let { name, value } = e.target;
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
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }  

  const handleSubmit = (event) => {
    //TODO prevent the right way
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h3>Email</h3>
        <input 
          type="email" 
          name="Email" 
          value={input.email} 
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.email && <span className='err'> {error.email}</span>}
      </label>
      <label>
        <h3>Username</h3>
        <input 
          type="text" 
          name="Username" 
          value={input.username} 
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.username && <span className='err'> {error.username}</span>}
      </label>
      <label>
        <h3>Password</h3>
        <input 
          name="Password" 
          value={input.password} 
          type={showPassword ? "text" : "password"} 
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.password && <span className='err'> {error.confirmPassword}</span>}
      </label>
      <label>
        <h3>Confirm Password</h3>
        <input 
          name="Confirm Password" 
          value={input.confirmPassword} 
          type={showPassword ? "text" : "password"} 
          onChange={onInputChange}
          onBlur={validateInput} 
        />
        {error.confirmPassword && <span className='err'> {error.confirmPassword}</span>}
      </label>
      <div>
        <div id='show-pw-text'>
        Show password 
        <input 
            id='check' 
            type='checkbox' 
            value={showPassword} 
            onChange={() => setShowPassword((prev) => !prev)}
            onBlur={validateInput}
          />
        </div>
        <input type="submit" name="submit" value="submit" onClick={validateInput}/>
      </div>
    </form>
  )
}
