import React, { Component } from 'react'
// import Time from '../Clock'
import './style.scss'
import { placeholder } from '@babel/types'

export default class WrittingArea extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      contents:""
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
          placeholder= "당신의 오늘은 어땠나요?"
          onChange={(e) => this.onEditNote(e)}
        />        
      </div>
    )
  }
}
