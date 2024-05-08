import { ReactKeycloakProvider } from "@react-keycloak/web";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Homepage } from './components/home/Homepage'
import { keycloak } from "./Keycloak";
import { SecuredPage } from "./components/secured/SecuredPage";
import { PrivateRoute } from "./helpers/PrivateRoute";

const App = () => {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <BrowserRouter> 
        <Routes>
          <Route exact path="/" element={ <Homepage/> }/>
          <Route exact path="/secured" element={ 
              <PrivateRoute>
                <SecuredPage/> 
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById("app"));
