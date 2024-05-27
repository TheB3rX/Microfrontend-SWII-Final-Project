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

export const getUserTurns = async ({token, userId}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const userTurns = fetch(`http://localhost:9001/turns/getUserTurns/${userId}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log(error))
  return userTurns;
}

export const cancelUserTurn = async ({token, userId, dependentId, scheduledDate}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = {
    "id": userId,
    "dependentId": dependentId,
    "scheduledDate": scheduledDate
  }
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  }

  const cancellation = fetch("http://localhost:9001/turns/update", requestOptions)
    .then((response) => response.text)
    .catch((error) => console.log(error));

  return cancellation;
}
