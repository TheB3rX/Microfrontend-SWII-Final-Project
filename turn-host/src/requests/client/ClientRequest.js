export const getClientAuthorization = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", REACT_APP_GRANT_TYPE);
  urlencoded.append("client_id", REACT_APP_CLIENT_ID);
  urlencoded.append("client_secret", REACT_APP_CLIENT_SECRET);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  fetch("http://localhost:8090/realms/TurnsManagementApp/protocol/openid-connect/token", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
}

export const getUserTurns = async ({token, userId, dependentId, scheduledDate, isAttended}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = {
    "userId": userId
  }

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  const turnList = await fetch(`http://localhost:9001/turns/getUserTurns/${userId}`, requestOptions);
  return turnList;
}
