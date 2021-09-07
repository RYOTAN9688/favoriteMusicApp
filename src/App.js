// import logo from './logo.svg'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TopPage } from './componets/Pages/TopPage'
import { SignUp } from './componets/Pages/SignUp'
import { Login } from './componets/Pages/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}
export default App
