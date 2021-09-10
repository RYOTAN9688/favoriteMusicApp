// import logo from './logo.svg'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from '../componets/Pages/Login/Login'
import { MainPage } from '../componets/Pages/Main/MainPage'
import { SignUp } from '../componets/Pages/SignUp/SignUp'
import { TopPage } from '../componets/Pages/TopPage/TopPage'
import { Spotify } from '../componets/Pages/TopPage/Spotify/Spotify'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/topPage" component={TopPage} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route exact path="/" component={MainPage} />
        <Route path="/spotify" component={Spotify} />
      </Switch>
    </Router>
  )
}
export default App
