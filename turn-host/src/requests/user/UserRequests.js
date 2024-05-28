import { getClientAuthorization } from "../client/ClientRequest";

export const createUser = async ({
  username,
  email,
  firstName = "",
  lastName = "",
  password,
  organization
}) => {
  const clientToken = getClientAuthorization();
  console.log(clientToken)
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${clientToken}`);

  const raw = JSON.stringify({
    "username": username,
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "password": password,
    "organization": organization 
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:9000/keycloak/user/create", requestOptions)
    .then((response) => {return response.json()})
    .catch((error) => console.error(error));
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
    .then((response) => response.json())
    .catch((error) => console.log(error))
  return userTurns;
}

export const getAdminTurns = async ({token, userId}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const userTurns = fetch(`http://localhost:9001/turns/getAdminTurns/${userId}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log(error))
  return userTurns;
}


export const cancelUserTurn = async ({token, turnId}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = {
    "id": turnId 
  }
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  }

  const cancellation = fetch("http://localhost:9001/turns/update", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log(error));

  return cancellation;
}


export const getUserType = async ({ token, userId }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    console.log(`Requesting admin turns for user ${userId}`);
    const adminTurnsResponse = await fetch(`http://localhost:9001/turns/getAdminTurns/${userId}`, requestOptions);
    
    console.log(`Admin turns response status: ${adminTurnsResponse.status}`);
    console.log(`Admin turns response headers:`, adminTurnsResponse.headers);

    if (adminTurnsResponse.status === 200) {
      return 0; //admin
    }

    console.log(`Requesting user turns for user ${userId}`);
    const userTurnsResponse = await fetch(`http://localhost:9001/turns/getUserTurns/${userId}`, requestOptions);
    
    console.log(`User turns response status: ${userTurnsResponse.status}`);
    console.log(`User turns response headers:`, userTurnsResponse.headers);

    if (userTurnsResponse.status === 200) {
      return 1; //user
    }

    throw new Error('Could not determine user type');
  } catch (error) {
    console.error('Error fetching user type:', error);
    return null; 
  }
};
