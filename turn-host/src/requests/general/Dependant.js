export const getAvailableDependantList = ({ token, userId }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const userTurns = fetch(`http://localhost:9000/user/getOrganizationDependants/${userId}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log(error))
  return userTurns;
}

export const getOrganizationClients = ({ token, userId }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const userTurns = fetch(`http://localhost:9000/user/getOrganizationClients/${userId}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log(error))
  return userTurns;
}
