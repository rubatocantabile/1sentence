import React, { Component } from 'react'
import './style.scss'

export default class Login extends Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="outer">
        <div className="container">
          <form className="inner">
            <div className="form-row">
              <label>이메일 : </label>
              <input type="text"></input>
            </div>
            <div>
            <div className="form-row">
              <label>비밀번호 : </label>
              <input type="text"></input>
            </div>
            </div>
            <div className="logIn">
              <button>로그인</button>
            </div>
            <div className="signUp">
              <button>회원가입</button>
            </div>
          </form>
        </div>        
      </div>
    )
  }
}
