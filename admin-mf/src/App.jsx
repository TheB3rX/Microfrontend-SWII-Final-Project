import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Ticket } from "./components/ticket";

// Componente Checkbox
const Checkbox = ({ label, ...rest }) => (
  <label>
    <input type="checkbox" {...rest} />
    {label}
  </label>
);

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const handleAddTicket = () => {
    setTickets([...tickets, { id: tickets.length + 1, checked: allChecked }]);
  };

  const handleAllCheckedChange = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    setTickets(tickets.map(ticket => ({ ...ticket, checked })));
  };

  return (
    <div>
      {/* Barra de navegación con gradiente */}
      <nav className="navbar">
        <div className="navbar-brand">Mi Aplicación</div>
        <ul className="navbar-nav">
          <li className="nav-item">Inicio</li>
          <li className="nav-item">Acerca</li>
          <li className="nav-item">Contacto</li>
        </ul>
      </nav>

      {/* Contenedor principal */}
      <div className="container">
        <div>
          <div className="test">
            <div className="checkbox_all">
              <input type="checkbox" id="miCheckbox" checked={allChecked} onChange={handleAllCheckedChange} />
              {/* <label htmlFor="miCheckbox">Mi checkbox</label> */}
            </div>

            <div className="buttons">
              <button>
                <img src="./lupa" alt="buscar" width={50} />
              </button>
              <button>
                <img src="./editar" alt="editar" width={50} />
              </button>
              <button>
                <img src="./eliminar" alt="eliminar" width={50} />
              </button>
              <button onClick={handleAddTicket}>
                <img src="./agregar" alt="agregar" width={50} />
              </button>
            </div>
          </div>
        </div>

        <div className="container_checkbox">
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} checked={ticket.checked} />
          ))}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
