import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//files
import LoginPage from './containers/Login.jsx'
import RegisterPage from './containers/Register.jsx'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
      </Switch>
    </Router>
  )
}
