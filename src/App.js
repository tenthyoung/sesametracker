import logo from './logo.svg';
import './App.css';
import HomePage from "./components/Homepage";
import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);



  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage />} />
        </Switch>
      </div>
    </ Router>

  );
  
}

export default App;
