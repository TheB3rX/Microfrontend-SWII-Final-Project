export const serviceAccountLogin = () => {
  return new Promise((resolve, reject) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", process.env.REACT_APP_CLIENT_ID);
    urlencoded.append("client_secret", process.env.REACT_APP_CLIENT_SECRET); 

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };

    fetch("http://localhost:8090/realms/TurnsManagementApp/protocol/openid-connect/token", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const token = result.access_token
        resolve(token);
      })
      .catch((error) => {
        reject(error)
      });  
  });
};
