import React from "react";
import { useState, useEffect } from "react";
import { isAuthenticated, logout, getToken } from "../../auth/keycloak.js";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    const auth = async () => {
     await isAuthenticated();
    }
    auth();
  }, []);

  const [authenticatedText, setAuthenticatedText] = useState("not");

  const check = () => {
    // Petición para hello-2
    axios
      .get("http://localhost:9000/hello-2", {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      })
      .then((response) => {
        setAuthenticatedText(response.data);
      })
      .catch((error) => {
        setAuthenticatedText("You don't have customer privileges");
      });
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
    </div>
  );
};

export default Login;
