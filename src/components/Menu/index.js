import React, { Component } from 'react'
import './style.scss'
// import { 예쁜버튼 } from 'antd'; 으로 바꿔볼까 생각중

export default class Menu extends Component {
  
  
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="line-wrapper">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div> 
      </div>
    )
  }
}
