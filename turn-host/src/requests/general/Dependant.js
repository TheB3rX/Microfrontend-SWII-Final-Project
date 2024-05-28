export const getAvailableDependantList = async ({ token, userId}) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const dependantList = await fetch(`http://localhost:9000/user/getOrganizationDependants/${userId}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return dependantList;
}
