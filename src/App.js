// import logo from './logo.svg'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from './componets/Pages/HomePage'
import { Login } from './componets/Pages/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}
export default App
