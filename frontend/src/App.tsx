import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

function PrivateRoute ({ component: Component, authenticated, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

function PublicRoute ({ component: Component, authenticated, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/chat" />
        )
      }
    />
  )
}

function App () {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  return loading === true ? (
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <PrivateRoute
          authenticated={authenticated}
          component={Chat}
          path="/chat"
        />
        <PublicRoute
          authenticated={authenticated}
          component={Signup}
          path="/signup"
        />
        <PublicRoute
          authenticated={authenticated}
          component={Login}
          path="/login"
        />
      </Switch>
    </Router>
  )
}

export default App
