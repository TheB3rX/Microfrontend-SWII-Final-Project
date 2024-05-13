export const createUser = ({ username, email, password, firstName = "", lastName = "", token }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  // const rawBody = JSON.stringify({
  //   "username": username,
  //   "email": email,
  //   "firstName": firstName,
  //   "lastName": lastName,
  //   "password": password,
  // });  

  const raw = JSON.stringify({
    "username": "andrea.calle",
    "email": "andrea@mail.com",
    "firstName": "Andrea",
    "lastName": "Calle",
    "password": "1234"
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  return fetch("http://localhost:9000/keycloak/user/create", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

