
import React, { createContext, useState } from "react";
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
import PrivateRoute from "./Components/PrivateR/PrivateRoute";
import LogIn from "./Components/LogIn/LogIn";
export const UserContext=createContext();


function App() {
  const [LoggedInUser,setLoggedInUser]=useState({});
  return (
    <div className="app-header" >
      <UserContext.Provider value={[LoggedInUser,setLoggedInUser]}>
      <h3> name:{LoggedInUser.name}</h3>
      <h3> email:{LoggedInUser.email}</h3>
    
      <Router>
      
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <PrivateRoute path="/Features">
          <CartDetails></CartDetails>
        </PrivateRoute>
       
        
        
        <Route path="/Features">
          <CartDetails/>
        </Route>

        
      </Switch>
    
  </Router>
  </UserContext.Provider>
      
    </div>
  );
}

export default App;
