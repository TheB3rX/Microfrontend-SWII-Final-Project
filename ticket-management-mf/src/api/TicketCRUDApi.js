export const TicketCreationAPI = ({
  userId,
  dependentId,
  clientSecret
}) => {
  const myHeaders = Headers();
  myHeaders.append("Content-Type", "application/json");
  urlencoded.append("Authorization", `Bearer ${clientSecret}`);

  const rawBody = JSON.stringify({
    turn: {
      "userId": userId,
      "dependentId": dependentId,
    } 
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: rawBody,
    redirect: "follow"
  };

    return fetch("http://localhost:9001/create", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("Result");
        true
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
}
