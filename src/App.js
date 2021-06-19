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

function App() {
  return (
    <Router>
      <div className="container">

        <h1>React Router</h1>

        <div className="btn-group">
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

        <Switch>

          <Route path="/" exact>
            <Inicio/>
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>

          <Route path="/nosotros">
            <Nosotros />
          </Route>

        </Switch>


      </div>
    </Router>
  );
}

export default App;
