import React, { Component } from 'react';

import AddTaskForm from '../components/AddTaskForm';
import Task from '../components/Task';

class App extends Component {
  state = {
    tasks: [
      { name: 'Walk Dog' },
      { name: 'Buy Groceries' },
      { name: 'Pay Bills' },
      { name: 'Call Parents' },
      { name: 'Mail Letter' }
    ]
  };

  addTask = name => {
    this.state.tasks.push({ name });
    this.setState(this.state);
  }

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
