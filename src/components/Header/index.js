import React, { Component } from 'react'
import Menu from '../Menu'
import LoginBtn from './LoginBtn'
import './style.scss'


export default class Header extends Component {
  constructor(props) {
    super(props) 
  }
  
  render() {
    return (
      <div className="header">
        <div className="ham">
          <Menu />
        </div>
        <div className="title">
          <span>1sentence</span>
        </div>
        <div className="loginBtn">
          <LoginBtn toggleLogin={() => this.props.toggleLogin()} />            
        </div>       
      </div>
    )
  }
}
