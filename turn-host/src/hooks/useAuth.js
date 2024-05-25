import { useState, useEffect } from "react";
import { getToken, isAuthenticated, keycloakUserId, login } from "../auth/keycloak";
import { getAvailableDependantList } from "../requests/general/Dependant";
import { getUserTurns } from "../requests/client/ClientRequest";

export const useAuth = () => {
  const [authData, setAuthData] = useState({
    auth: null,
    token: null,
    userId: null,
  });
  const [dependantList, setDependantList] = useState([]);
  const [turnList, setTurnList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      if (authenticated) {
        const token = getToken();
        const userId = keycloakUserId();
        setAuthData({
          auth: authenticated,
          token: token,
          userId: userId,
        });
        const listOfDependants = getAvailableDependantList();
        setDependantList(listOfDependants);
        const listOfTurns = await getUserTurns({token, userId})
        console.log("TURNLIST",listOfTurns)
        setTurnList(listOfTurns);
      } else {
        login();
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  return { authData, dependantList, turnList, loading };
};
