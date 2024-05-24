export const userExistsInDB = async ({token, userId}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify({
    "userId": userId
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:9000/user/checkExistence", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

export const addDataToUser = async ({token, userId, username, email, firstName, lastName, organization}) => {
  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify({
    "userId": userId,
    "username": username,
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "organization": organization
  });

  const requestOptions = {
    method: "POST",
    token: token,
    // headers: myHeaders,
    body: raw,
    redirect: "follow"
  }
  console.log(requestOptions)

  // fetch("http://localhost:9000/user/store", requestOptions)
  //   .then((response) => response.json)
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log(error));
}
