import React, { Component } from 'react'
import Menu from '../Menu'
import Login from '../Login'
import './style.scss'


export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="ham">
          <Menu />
        </div>
        <div id="title">
          <span>1sentence</span>
        </div>
        <div className="login">
          <Login />            
        </div>       
      </div>
    )
  }
}
