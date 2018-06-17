import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json'
import TodoForm from './components/TodoForm';

class App extends Component {

  constructor(){
    super();
    this.state={
      todos
    }

    this.handleAddToDo=this.handleAddToDo.bind(this);
    
  }

    handleAddToDo(todo){
     
        this.setState({
          todos:[...this.state.todos,todo]
        })
      
    }

    removeToDo(i){
      if(window.confirm('Are you sure you want to delete it?')){

      this.setState({
        todos:this.state.todos.filter((e,index)=>{
          return index!==i
        })
      })
    }
    }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            
            <div className="card-body">
              {todo.description}
            </div>
            <div className="card-body">
              {todo.responsable}
            </div>
            <div className="card-footer">
              <button className="btn btn-danger"
              onClick={this.removeToDo.bind(this,i)
              }>
              Delete
              </button>
            </div>

          </div>
        </div>
      )
    });
  
    return (
      <div className="App">
         <nav className="navbar navbar-dark bg-dark">
         
          <a href="" className="text-white" >
         Tasks
         <span className="badge badge-pill badge-light ml-2">
         
            {this.state.todos.length}
           </span>
          </a>
        </nav>
        <div className="container">
        <TodoForm onAddToDo={this.handleAddToDo}/>
        <div className="row mt-5">
        {todos}
        </div>
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default App;
