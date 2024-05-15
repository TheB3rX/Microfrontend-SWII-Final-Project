import React, { useState, useEffect } from "react";
import { isAuthenticated, logout, getToken } from "../../auth/keycloak.js";
import axios from "axios";
import { LineWave } from "react-loader-spinner";

const Login = () => {
  const [keycloakAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authenticatedText, setAuthenticatedText] = useState("not");

  useEffect(() => {
    const auth = async () => {
      await isAuthenticated().then(() => {
        setIsAuthenticated(true);
      });
      setIsLoading(false);
    };
    auth();
  }, []);

  const check = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:9000/hello-2", {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      setAuthenticatedText(response.data);
    } catch (error) {
      setAuthenticatedText("You don't have customer privileges");
    } finally {
      setIsLoading(false);
    }
  };

  const tma_logout = () => {
    logout();
  };

  return (
    <div>
      <div className="top-0 w-full flex flex-wrap">
        <section className="x-auto">
          <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <h1 className="text-3xl font-bold font-heading">
                {authenticatedText}
              </h1>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-blue-800" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-800" href="/secured">
                    Secured Page
                  </a>
                </li>
              </ul>
              <div className="hidden xl:flex items-center space-x-5">
                <div className="hover:text-gray-200">
                  <button
                    type="button"
                    className="text-blue-800"
                    onClick={check}
                  >
                    Login
                  </button>

                  <button
                    type="button"
                    className="text-blue-800"
                    onClick={tma_logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <LineWave
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        </div>
      )}
    </div>
  );
};

export default Login;
