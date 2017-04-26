import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import * as TaskActionCreators from '../actions/task';

import TaskFilter from '../components/TaskFilter';
import AddTaskForm from '../components/AddTaskForm';
import Task from '../components/Task';

class App extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  };

  // TODO seperate lists/views for complete/incomplete/all
  
  render() {
    const { addTask, filterTasks, removeTask, tasks, toggleCompletion } = this.props;

    return (
      <div>
        <div>
          <h1>To Do List</h1>
          <TaskFilter filterTasks={filterTasks}/>
          <ul className="list-group">
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

const mapDispatchToProps = dispatch => ({
  addTask: name => {
    dispatch(TaskActionCreators.addTask(name));
  },
  removeTask: index => {
    dispatch(TaskActionCreators.removeTask(index));
  },
  toggleCompletion: index => {
    dispatch(TaskActionCreators.toggleComplete(index));
  },
  filterTasks: filter => {
    dispatch(TaskActionCreators.filterTasks(filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
