import React, { createContext, useContext, useState, useEffect } from "react";
import { getToken, isAuthenticated, keycloakUserId, login } from "../auth/keycloak";
import { getAvailableDependantList } from "../requests/general/Dependant";
import { getUserTurns, getUserType } from "../requests/user/UserRequests";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    auth: null,
    token: null,
    userId: null,
  });
  const [dependantList, setDependantList] = useState([]);
  const [turnList, setTurnList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
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

          const listOfTurns = await getUserTurns({ token, userId });
          setTurnList(listOfTurns);

          const typeOfUser = await getUserType({ token, userId });
          setUserType(typeOfUser);
        } else {
          login();
        }
      } catch (error) {
        console.error("Error during authentication process:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ authData, dependantList, turnList, userType, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
