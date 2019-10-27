import React, { Component } from 'react'
import './index.css';

export default class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="ham">햄</div>
        <div class="title">
          <span>1sentence</span>
        </div>
      </div>
    )
  }
}
