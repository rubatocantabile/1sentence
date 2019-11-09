import React, { Component } from 'react'
import './style.css'

const DATA_MOCK = [
  {
    title: 'title1',
    content: 'content1',
  },
  {
    title: 'title2',
    content: 'content2',
  }
]

export default class List extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="list">
        {
  DATA_MOCK.map(note => (<div>{note.title}</div>))
        }
      </div>
    )
  }
}
