import { getClientAuthorization } from "../client/ClientRequest";

export const createUser = async ({
  username,
  email,
  firstName = "",
  lastName = "",
  password,
  organization
}) => {
  const clientToken = getClientAuthorization();
  console.log(clientToken)
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${clientToken}`);

  const raw = JSON.stringify({
    "username": username,
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "password": password,
    "organization": organization 
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:9000/keycloak/user/create", requestOptions)
    .then((response) => {return response.json()})
    .catch((error) => console.error(error));
}
