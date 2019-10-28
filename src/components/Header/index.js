import React, { Component } from 'react'
import './style.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="ham">햄</div>
        <div id="title">
          <span>1sentence</span>
        </div>
        <div className="login">
          <span>로그인</span>
        </div>       
      </div>
    )
  }
}
