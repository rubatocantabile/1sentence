import React, { Component } from 'react'
import './index.css';
import Header from '../Header'
import Left from '../Left'
import Note from '../Note'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Left />
        <Note />
      </div>
    )
  }
}
