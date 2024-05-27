import ReactDOM from "react-dom/client";
import { NavbarComp } from "./Navbar/NavbarComp";
import { BrowserRouter } from "react-router-dom";

const App = () => <NavbarComp />;

ReactDOM.createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
