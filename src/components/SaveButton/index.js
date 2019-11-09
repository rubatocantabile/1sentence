import React, { Component } from 'react'
import './style.scss'

export default class SaveButton extends Component {

  render() {
    return (
      <div>
        <input className="S-Button" style='submit'>
          <span>저장</span>
        </input>
      </div>
    )
  }
}
