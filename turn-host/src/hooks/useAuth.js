import React, { createContext, useContext, useState, useEffect } from "react";
import { getToken, isAuthenticated, keycloakUserId, login } from "../auth/keycloak";
import { getAvailableDependantList } from "../requests/general/Dependant";
import { getAdminTurns, getUserTurns, getUserType } from "../requests/user/UserRequests";
import { getOrganizationClients } from "../requests/client/ClientRequest";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    auth: null,
    token: null,
    userId: null,
  });
  const [dependantList, setDependantList] = useState([]);
  const [clientList, setClientList] = useState([]);
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

          const typeOfUser = await getUserType({ token, userId });
          console.log("Determined User Type:", typeOfUser);
          setUserType(typeOfUser);

          if (typeOfUser === 0) {
            console.log('Fetching admin turns');
            const listOfTurns = await getAdminTurns({ token, userId });
            console.log('Admin turns:', listOfTurns);
            setTurnList(listOfTurns);
          } else if (typeOfUser === 1) {
            console.log('Fetching user turns');
            const listOfTurns = await getUserTurns({ token, userId });
            console.log('User turns:', listOfTurns);
            setTurnList(listOfTurns);
          }

          const listOfDependants = await getAvailableDependantList({ token, userId });
          console.log('Dependants:', listOfDependants);
          setDependantList(listOfDependants);

          const listOfClients = await getOrganizationClients({ token, userId });
          console.log('Clients:', listOfClients);
          setClientList(listOfClients);

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
    <AuthContext.Provider value={{ 
      authData, 
      dependantList, 
      clientList,
      turnList, 
      userType, 
      loading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
