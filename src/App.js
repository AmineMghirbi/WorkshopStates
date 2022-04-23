import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import PlanningForm from './Components/PlanningForm/PlanningForm';
import Planning from './Components/Planning/Planning';

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tasks:[]
    }
    this.AddTask=task=>{
      this.setState(
        {
          tasks:[...this.state.tasks,task]
        }
      )
    }
    this.deleteTask=task=>{
      this.setState({
        tasks:this.state.tasks.filter(item=>item !== task)
      }) 
    }
  }
  render() {
    return (
      <>
        <h1 className='title'>What's the plan for today</h1>  
        <PlanningForm onSubmit={this.AddTask}/>
        <Planning todos={this.state.tasks} deletetask={this.deleteTask}/>
      </>
    )
  }
}

export default App

