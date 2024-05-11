import React from 'react'
import Keycloak from 'keycloak-js'
import $ from 'ajax'
let initOptions = {
  "realm": "TurnsManagementApp",
  "auth-server-url": "http://localhost:8090/",
  "resource": "TurnsManagementAppClient",
  "verify-token-audience": true,
  "credentials": {
    "secret": "GhtEmuX5w13rY0Nt28UKJmzWCpyC0HEl"
  },
  "use-resource-role-mappings": true,
}
let keycloak = new Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {

    if (!auth) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }

    localStorage.setItem("bearer-token", keycloak.token);
    localStorage.setItem("refresh-token", keycloak.refreshToken);
    console.log(keycloak.token);

    setTimeout(() => {
        keycloak.updateToken(70).success((refreshed) => {
            if (refreshed) {
                console.debug('Token refreshed' + refreshed);
            } else {
                console.warn('Token not refreshed, valid for '
                    + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).error(() => {
            console.error('Failed to refresh token');
        });


    }, 60000)

}).error(() => {
    console.error("Authenticated Failed");
});

const Login = ({ }) => {
  const check = () => {
    $.ajax({
      type: "GET",
      url: "http://localhost:9000/hello-1",
      headers : {
         'Authorization': 'Bearer ' + localStorage.getItem("bearer-token")
      },
      success: function (data1) {
        document.getElementById("admin").innerHTML = data1;
      },
      error: function (error) {
        document.getElementById("admin").innerHTML = "You dont have admin privilages";
      }
    });

    $.ajax({
      type: "GET",
      url: "http://localhost:9000/hello-2",
      headers : {
         'Authorization': 'Bearer ' + localStorage.getItem("bearer-token")
      },
      success: function (data2) {
        document.getElementById("cust").innerHTML = data2;
      },
      error: function (error) {
        document.getElementById("cust").innerHTML = "You dont have customer privilages";
      }
    });


  };

  const logout = ()=>{
      keycloak.logout();
  };

  return (
    <div>
      <div className="top-0 w-full flex flex-wrap">
       <section className="x-auto">
         <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
           <div className="px-5 xl:px-12 py-6 flex w-full items-center">
             <h1 className="text-3xl font-bold font-heading">
               Keycloak React AUTH.
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
                    onClick={logout()}
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
  )
}

export default Login 
