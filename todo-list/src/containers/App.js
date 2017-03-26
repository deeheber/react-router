import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../actions/task';
import uuid from 'uuid';

import AddTaskForm from '../components/AddTaskForm';
import Task from '../components/Task';

class App extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  };

  // TODO seperate lists/views for complete/incomplete/all
  
  render() {
    const { dispatch, tasks } = this.props;
    const addTask = bindActionCreators(TaskActionCreators.addTask, dispatch);
    const removeTask = bindActionCreators(TaskActionCreators.removeTask, dispatch);
    const toggleCompletion = bindActionCreators(TaskActionCreators.toggleComplete, dispatch);

    return (
      <div>
        <div>
          <h1>To Do List</h1>
          <ul>
          {
            tasks.map((task, index)=> {
              const uniqueKey = uuid.v4();
              return (
                <Task 
                  name={task.name}
                  key={uniqueKey}
                  complete={task.complete}
                  removeTask={() => removeTask(index)}
                  toggleCompletion={() => toggleCompletion(index)}
                />
              );
            })
          }
          </ul>
        </div>
        <AddTaskForm addTask={addTask}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    tasks: state.tasks
  }
);

export default connect(mapStateToProps)(App);
