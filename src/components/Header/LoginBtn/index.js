import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import './style.scss'

export default class LoginBtn extends Component {
  constructor(props) {
    super(props) 
  }

  loginBtnClicked(event) {
    this.props.toggleLogin()
  }

  render() {
    const { toggleLogin } = this.props;
    return (
      <div className="login-button" onClick={this.loginBtnClicked}>
        <Link to="/login">
        <span>로그인</span>
        </Link>
      </div>
    )
  }
}
