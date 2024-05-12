const axios = require('axios');

export const serviceAccountLogin = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const userBody = JSON.stringify({
    "username": username,
    "email": email,  
    "firstName": firstName,
    "lastName": lastName,
    "password": password 
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: userBody,
    redirect: "follow"
  };

  fetch("http://localhost:9000/keycloak/user/create", requestOptions)
    .then((response) => response.text())
    .then(() => isCreated = true)
    .catch((error) => console.error(error));
}
