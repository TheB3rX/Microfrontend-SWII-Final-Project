import { ReactKeycloakProvider } from "@react-keycloak/web";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { keycloak } from "./Keycloak";
import { SecuredPage } from "./components/secured/SecuredPage";
import { PrivateRoute } from "./helpers/PrivateRoute";
import Signup from "./pages/Signup";
import { AuthProvider } from "./auth/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter> 
          <Routes>
            <Route exact path="/login" element={<Signup/>} />
            <Route exact path="/" element={ <Signup/> }/>
            <Route exact path="/secured" element={ 
                <PrivateRoute>
                  <SecuredPage/> 
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </AuthProvider>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById("app"));
