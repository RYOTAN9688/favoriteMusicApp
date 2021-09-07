// import logo from './logo.svg'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from '../componets/Pages/Login'
import { MainPage } from '../componets/Pages/MainPage'
import { SignUp } from '../componets/Pages/SignUp'
import { TopPage } from '../componets/Pages/TopPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </Router>
  )
}
export default App
