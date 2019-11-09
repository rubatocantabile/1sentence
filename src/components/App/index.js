import React, { Component } from 'react'
import './style.scss';
import Header from '../Header'
import Left from '../Left'
import Note from '../Note'
import Login from '../Login'
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

  render() {
    return (
      <div>
        <div className="App">
          <Header toggleLogin={() => this.toggleLogin()} />
          <Left />
          <div className="time">
            <Clock 
              format={'YYYY년 MM월 DD일 HH:mm:ss'} 
              ticking={true} 
              timezone={'Asia/Seoul'}
            />        
          </div>
          <div className="container">
            <Note />  
            {/* <SaveButton />         */}
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
