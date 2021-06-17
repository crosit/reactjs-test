import './App.css';

import  React from "react";
import{
  BrowserRouter as Router,
  Switch,
}from "react-router-dom";
import Login from './components/Login';
import Registro from './components/Registro';



function App() {
  return (

   <Router>
     <div className="navbar">
        <h1>Pandello</h1>
     </div>
     <Switch>

    
    <Router path="/registro">
      <Registro/>
    </Router>
    <Router path="/">
      <Login />
    </Router>

     </Switch>
   </Router>
  );
}

export default App;
