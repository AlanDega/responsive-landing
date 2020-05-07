import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header"
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Landing from "./components/Landing";

function App() {
  return (
    <>
    <Router>
    <Route exact path="/" component={Landing} />
    </Router>
    </>
  );
}

export default App;
