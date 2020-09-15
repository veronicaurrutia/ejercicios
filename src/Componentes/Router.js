import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from '../App';
import Agregar from './Agregar';
import Detalle from './Detalle';
import Modificar from './Modificar';

function Rout() {
  return (
      <Router >   
        <Switch>
          <Route path="/" exact> 
            <App/>          
          </Route>
          <Route path="/agregar">
            <Agregar />
          </Route>
          <Route path="/detalle">
            <Detalle/>
          </Route>
          <Route path="/Modificar">
            <Modificar/>
          </Route>
        </Switch>  
    </Router>

  );
}

export default Rout;