import React, { Component } from 'react'
import './PlanningForm.css'
export class PlanningForm extends Component {
    constructor(props){
        super(props);
        this.state={
            input:''
        }
        this.handleChange=e=>{
            this.setState({
                input:e.target.value
            })
        }
        this.handleSubmit=e=>{
            e.preventDefault();
            this.props.onSubmit(this.state.input);
            this.setState({
                input:''
            })
        }
    }


  render() {
    return (
      <form className='form__container' onSubmit={this.handleSubmit}>
          <div>
              <input 
              className='todo__input'
                type={"text"} 
                placeholder="Add you to do task"
                value={this.state.input}
                name="ToDoText"
                onChange={this.handleChange}
                required
                />
              <button className='btn__todo'>Add Task</button>
          </div>
      </form>
    )
  }
}

export default PlanningForm