import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <div>
          <span>이메일</span>
          <input></input>
          <button>인증</button>
        </div>
        <div>
          <span>인증키</span>
          <input></input>
          <button>확인</button>
        </div>
        <div>
          <span>비밀번호</span>
          <input></input>
        </div>
        <div>
          <span>비밀번호 확인</span>
          <input></input>
        </div>
        <div>
          <button>가입</button>
        </div>

      </div>
    )
  }
}
