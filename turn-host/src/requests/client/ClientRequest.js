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

export const getOrganizationClients = async ({ token, userId }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const organizationClients= await fetch(`http://localhost:9000/user/getOrganizationClients/${userId}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return organizationClients;
}
