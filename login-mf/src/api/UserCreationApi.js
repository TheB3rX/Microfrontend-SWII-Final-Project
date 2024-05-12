export const createUser = ({ username, email, password, firstName = "", lastName = "", token }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const urlencoded = new URLSearchParams();

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
    body: urlencoded,
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

