import React, { Component } from 'react'
import './Task.css'
export class Task extends Component {
    constructor(props){
        super(props)
        this.delete=(e)=>{
          this.props.deletetask(this.props.text);
        }
    }
  render() {
    return (
        <div className='task__container'>
            <div>{this.props.text}</div>
            <button onClick={this.delete}>Delete</button>
        </div>

    )
  }
}

export default Task