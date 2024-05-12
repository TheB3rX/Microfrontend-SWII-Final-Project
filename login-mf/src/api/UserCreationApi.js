export const createUser = ({ username, email, password, firstName = "", lastName = "", token }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const urlencoded = new URLSearchParams();
  urlencoded.append("username", username);
  urlencoded.append("email", email);
  urlencoded.append("firstName", firstName);
  urlencoded.append("lastName", lastName);
  urlencoded.append("password", password);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  return fetch(`http://localhost:8090/admin/realms/${process.env.REACT_APP_REALM}/user/create`, requestOptions)
    .then((response) => response.text())
    .then(() => true)
    .catch((error) => {
      console.error(error);
      return false;
    });
};

