import React from 'react'
// React Router Modules
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
// Components
import Inicio from "./components/Inicio"
import Contacto from "./components/Contacto"
import Nosotros from "./components/Nosotros"
import User from "./components/User"

function App() {
  return (
    // Router para hacer una Página dinamica (SPA)
    <Router>
      <div className="container">

        <h1>React Router</h1>

        <div className="btn-group">
          {/* Link para cambiar la vista a un componente especifico */}
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
          <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
            Nosotros
          </NavLink>
        </div>

        <hr/>
        
        {/* Switch es para colocar nuestros componetes dentro de la página */}
        <Switch>

          {/* Route  para el componente que se va a mostrar */}
          <Route path="/nosotros/:id">
            <User/>
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>

          <Route path="/nosotros">
            <Nosotros />
          </Route>

          <Route path="/" exact>
            <Inicio/>
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
