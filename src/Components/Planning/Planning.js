import React, { Component } from 'react'
import Task from './Task/Task';

export class Planning extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className='todolist__container'>{this.props.todos.map(todo=>
          <Task text={todo} deletetask={this.props.deletetask}/>
      )}</div>
    )
  }
}

export default Planning