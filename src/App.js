import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login/Login'
import Signup from './signup/Signup'
import Chat from './chat/Chat'
import Home from './home/Home'


function App() {

  return (
    <Switch>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/signup'>
        <Signup />
      </Route>
      <Route exact path='/chat'>
        <Chat />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default App
