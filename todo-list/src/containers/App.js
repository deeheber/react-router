import React, { Component } from 'react';

import AddTaskForm from '../components/AddTaskForm';
import Task from '../components/Task';

class App extends Component {
  // TODO: move state to a redux store
  // Optional TODO: seperate list/views for complete/incomplete/all tasks
  state = {
    tasks: [
      { name: 'Walk Dog', complete: false},
      { name: 'Buy Groceries', complete: true },
      { name: 'Pay Bills', complete: true },
      { name: 'Call Parents', complete: false },
      { name: 'Mail Letter', complete: false }
    ]
  };

  addTask = name => {
    this.state.tasks.push({ name: name, complete: false });
    this.setState(this.state);
  }

  // TODO: Update task

  removeTask = index => {
    // TODO: Delete confirmation if task is not marked complete
    this.state.tasks.splice(index, 1);
    this.setState(this.state);
  }

  toggleCompletion = index => {
    this.state.tasks[index].complete = !this.state.tasks[index].complete;
    this.setState(this.state);
  }

  // TODO: generate unique key for each task uuid npm package
  render() {
    return (
      <div>
        <div>
          <h1>To Do List</h1>
          <ul>
          {
            this.state.tasks.map((task, index)=> {
              return (
                <Task 
                  name={task.name}
                  key={task.name}
                  complete={task.complete}
                  removeTask={() => this.removeTask(index)}
                  toggleCompletion={() => this.toggleCompletion(index)}
                />
              );
            })
          }
          </ul>
        </div>
        <AddTaskForm addTask={ this.addTask }/>
      </div>
    );
  }
}

export default App;
