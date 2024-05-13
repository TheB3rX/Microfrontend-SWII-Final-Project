export const createUser = ({ username, email, password, firstName = "", lastName = "", token }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const rawBody = JSON.stringify({
    "username": username,
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "password": password,
  });  

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: rawBody,
    redirect: "follow"
  };

  return fetch(`http://localhost:9000/keycloak/user/create`, requestOptions)
    .then((response) => response.text())
    .then(() => true)
    .catch((error) => {
      console.error(error);
      return false;
    });
};

