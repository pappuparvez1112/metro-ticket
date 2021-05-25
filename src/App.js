
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';


import './App.css';
import Home from './Components/Home/Home';
import Header from "./Components/Header/Header";
import CartDetails from "./Components/CartDetails/CartDetails";
import Features from "./Components/Features/Features";


function App() {
  return (
    <div className="app-header" >
      <div className="container">
      <Router>
      
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        
        <Route path="/Features">
          <CartDetails/>
        </Route>
        
      </Switch>
    
  </Router>
      </div>
    </div>
  );
}

export default App;
