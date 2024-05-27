export const createTicket = ({token, userId, dependentId="", scheduledDate=""}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify({
    "userId": userId,
    "dependentId": dependentId,
    "scheduledDate": scheduledDate
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:9001/turns/create", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

export const deleteTicket = ({ token, turn }) => {
  const token = getToken;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(`Authorization", "Bearer ${token}`);

  const raw  = {
    "id": turn
  }
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw, 
    redirect: "follow"
  };

  fetch("http://localhost:9001/turn/delete", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
