import React, { Component } from 'react'
import './style.scss'

export default class WrittingArea extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      contents:"Hello"
    }
  }

  onEditNote(e) {
    this.setState(
      {
        contents: e.target.value
      }
    )
  }

  render() {
    return (
      <div className="note">
        <textarea
          className="note-contents"
          value={this.state.contents}
          onChange={(e) => this.onEditNote(e)}
        />
      </div>
    )
  }
}
