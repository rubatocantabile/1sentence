import React, { Component } from 'react'
import './style.scss';
import Header from '../Header'
import Left from '../Left'
import Note from '../Note'
import Clock from 'react-live-clock';
// import Time from '../Clock'
// import Menu from '../Menu'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Left />
        <div className="time">
          <Clock 
            format={'YYYY년 MM월 DD일 HH:mm:ss'} 
            ticking={true} 
            timezone={'Asia/Seoul'}
          />        
        </div>
        
        <Note />
        
      </div>
    )
  }
}
