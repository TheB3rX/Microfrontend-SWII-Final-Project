export const getAvailableDependantList = async ({ token, userId}) => {
  // const ist = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ];

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
  console.log(dependantList[0])
  return dependantList;
}
