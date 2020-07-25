import React from 'react';
import Home from './pages/Home'; 
import Contacts from './pages/Contacts'; 
import Portfolio from './pages/Portfolio';
import './App.css'; 
import { BrowserRouter as Router, Route } from "react-router-dom"; 


function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} /> 
      <Route exact path="/contacts" component={Contacts}/> 
    </div>
  </Router>
  );
}

export default App;
