import React, { Component } from 'react'
import './style.scss';
import Header from '../Header'
import Left from '../Left'
import Note from '../Note'
import Login from '../Login'
import List from '../List'
import Clock from 'react-live-clock';
import {Route, Switch, Link} from 'react-router-dom';
// import SaveButton from '../SaveButton'

// import Time from '../Clock'
// import Menu from '../Menu'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      showLogin: false
    }
  }

  
  toggleLogin() {
    this.setState({
      showLogin: !this.state.showLogin
    })
  }
// /list/10/8/30
  render() {
    return (
      <div>
        <div className="App">
          <Header toggleLogin={() => this.toggleLogin()} />
          <div className="container">
            <Route path="/note" component={Note} />
            <Route path="/list/:year/:month/:day" component={List} />
            {/* <Route path="/list/:year/:month" component={} />
            <Route path="/list/:year" component={} /> */}
          </div>     
        </div>
        { this.showLogin ?
           <Login />
           : null
        }
        <Switch>
        <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}
