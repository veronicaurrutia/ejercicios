import React, { Component } from 'react';
import './App.css';
import  Inicio from './Componentes/Inicio';
import  Selector from './Componentes/Selector';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

const url="https://rayentutorialtestapp.azurewebsites.net/tutorials";

class app extends Component{
  state={
  data:[]
  }

traertutoriales=()=>{
  axios.get(url).then(response=>{
console.log(response.data);
this.setState({data: response.data});
  })

}

componentDidMount() {
  this.traertutoriales();
}

render(){
  return (
    
    <div className="App">
      <div>
        <Inicio/>
        <Selector/>
       {this.state.data.map(tutorial=>{
         return(
          <List component="nav">
          <ListItem button component="a" href="/detalle">
            <ListItemText primary={tutorial.nombre} secondary={tutorial.profesor}/>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
         )
       })}
        
      </div>
    </div>
  );
}

}
export default app; 