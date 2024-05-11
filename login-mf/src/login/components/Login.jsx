import React from "react";
import Keycloak from "keycloak-js";
import $ from "ajax";
import axios from "axios";
import { useState } from "react";

let initOptions = {
  url: "http://localhost:8090/",
  realm: "TurnsManagementApp",
  clientId: "TurnsManagementAppReact",
  secret: "S7W89eQlZReefXpRbZyS6XUWqKWJlsFS",
};
let keycloak = new Keycloak(initOptions);

try {
  const authenticated = await keycloak.init({
    onLoad: "login-required",
  });

  localStorage.setItem("bearer-token", keycloak.token);
  console.log(
    `User is ${authenticated ? "authenticated" : "not authenticated"}`
  );
} catch (error) {
  console.error("Failed to initialize adapter:", error);
}

const Login = ({}) => {
  const [authenticatedText, setAuthenticatedText] = useState("not");

  const check = () => {
    // Petición para hello-2
    axios
      .get("http://localhost:9000/hello-2", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("bearer-token"),
        },
      })
      .then((response) => {
        setAuthenticatedText(response.data);
      })
      .catch((error) => {
        setAuthenticatedText("You don't have customer privileges");
      });
  };

  const logout = () => {
    keycloak.logout();
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
                    onClick={logout}
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
