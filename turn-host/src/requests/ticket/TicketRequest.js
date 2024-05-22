import { keycloakUserId, getToken } from "../../auth/keycloak";

export const createTicket = ({dependentId}) => {
  const token = getToken;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(`Authorization", "Bearer ${token}`);

  const raw = JSON.stringify({
    "userId": keycloakUserId,
    "dependentId": dependentId 
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:9001/turn/create", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

