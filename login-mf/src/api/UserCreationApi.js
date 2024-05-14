export const createUser = ({ username, email, password, firstName = "", lastName = "",organization = "", token }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

 const rawBody = JSON.stringify({
    "username": username,
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "credentials": [
      {
        "type": "password",
        "value": password,
        "temporary": false
      }
    ]
  });  

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: rawBody,
    redirect: "follow"
  };

  return fetch(`http://localhost:8090/admin/realms/${process.env.REACT_APP_REALM}/users`, requestOptions)
    .then((response) => response.text())
    .then(() => true)
    .catch((error) => {
      console.error(error);
      return false;
    });
};

