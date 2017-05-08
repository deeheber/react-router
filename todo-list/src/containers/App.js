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

  render() {
    const { addTask, filterTasks, removeTask, selectedFilter, tasks, toggleCompletion, updateTask } = this.props;
    let filteredTasks = tasks.filter(task => task);

    if(selectedFilter === 'Incomplete') {
      filteredTasks = tasks.filter(task=> task.complete === false);
    }

    if(selectedFilter === 'Complete') {
      filteredTasks = tasks.filter(task=> task.complete);
    }

    return (
      <div>
        <div>
          <h1>To Do List</h1>
          <TaskFilter filterTasks={filterTasks} selectedFilter={selectedFilter}/>
          <ul className="list-group">
          {
            filteredTasks.map((task)=> {
              const uniqueKey = uuid.v4();
              const id = task.id;
              return (
                <Task 
                  name={task.name}
                  key={uniqueKey}
                  complete={task.complete}
                  id={id}
                  removeTask={() => removeTask(id)}
                  toggleCompletion={() => toggleCompletion(id)}
                  updateTask={(id, data) => updateTask(id, data)}
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

const mapStateToProps = state => ({
  tasks: state.tasks,
  selectedFilter: state.selectedFilter
});

const mapDispatchToProps = dispatch => ({
  addTask: name => {
    dispatch(TaskActionCreators.addTask(name));
  },
  removeTask: id => {
    dispatch(TaskActionCreators.removeTask(id));
  },
  toggleCompletion: id => {
    dispatch(TaskActionCreators.toggleComplete(id));
  },
  updateTask: (id, data) => {
    dispatch(TaskActionCreators.updateTask(id, data));
  } ,
  filterTasks: filter => {
    dispatch(TaskActionCreators.filterTasks(filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
