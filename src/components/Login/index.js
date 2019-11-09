import React, { Component } from 'react'
import './style.css'

export default class Login extends Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="popup">
        <form className="popup_inner">
          <div>
            <span>이메일</span>
            <input></input>
          </div>
          <div>
            <span>비밀번호</span>
            <input></input>
          </div>
          <div>
            <button>로그인</button>
          </div>
          <div>
            <button>회원가입</button>
          </div>
        </form>
      </div>
    )
  }
}
