import React, { Component } from 'react';

import AddTaskForm from '../components/AddTaskForm';
import List from '../components/List';

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

  render() {
    return (
      <div>
        <AddTaskForm />
        <List header="To Do" data={this.state.tasks} />
      </div>
    );
  }
}

export default App;
