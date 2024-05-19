export const TicketCreationAPI = ({
  userId,
  dependentId,
  clientSecret
}) => {
  return new Promise((resolve, reject) => {
    const myHeaders = Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", userId);
    urlencoded.append("client_secret", clientSecret);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    }
  });
}
