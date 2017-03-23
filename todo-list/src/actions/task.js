import * as TaskActionTypes from '../actiontypes/task';

export const addTask = name => {
  return {
    type: TaskActionTypes.ADD_TASK,
    name
  };
};

export const removeTask = index => {
  return {
    type: TaskActionTypes.REMOVE_TASK,
    index
  };
};

export const toggleComplete = index => {
  return {
    type: TaskActionTypes.TOGGLE_COMPLETE,
    index
  }
}
