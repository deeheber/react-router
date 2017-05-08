import * as TaskActionTypes from '../actiontypes/task';

export const addTask = name => {
  return {
    type: TaskActionTypes.ADD_TASK,
    name
  };
};

export const removeTask = id => {
  return {
    type: TaskActionTypes.REMOVE_TASK,
    id
  };
};

export const toggleComplete = id => {
  return {
    type: TaskActionTypes.TOGGLE_COMPLETE,
    id
  }
}

export const filterTasks = filter => {
  return {
    type: TaskActionTypes.FILTER_TASKS,
    filter
  }
}

export const updateTask = (id, data) => {
  return {
    type: TaskActionTypes.UPDATE_TASK,
    id,
    data
  }
}
