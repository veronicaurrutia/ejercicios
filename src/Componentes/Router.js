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
import { Button } from '@material-ui/core';

export default function Rout() {
  return (
      <Router >   
      <div>
        <nav>
          <ul>
            <li>
              <Button>
              <Link to="/">App</Link>
              </Button>
            </li>
            <li>
              <Link to="/detalle">Detalle</Link>
            </li>
            <li>
              <Link to="/Modificar">Modificar</Link>
            </li>
          </ul>
        </nav>

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
        </div>
    </Router>

  );
}

