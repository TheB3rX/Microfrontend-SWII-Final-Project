export const getClientAuthorization = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", process.env.REACT_APP_GRANT_TYPE);
  urlencoded.append("client_id", process.env.REACT_APP_CLIENT_ID);
  urlencoded.append("client_secret", process.env.REACT_APP_CLIENT_SECRET);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  const clientAuthToken = fetch("http://localhost:8090/realms/TurnsManagementApp/protocol/openid-connect/token", requestOptions)
    .then((response) => response.text())
    .catch((error) => console.error(error));
  return clientAuthToken;
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
    .then((response) => response.text())
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
