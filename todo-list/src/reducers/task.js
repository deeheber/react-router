import * as TaskActionTypes from '../actiontypes/task';

const initialState = {
  tasks: [
    { name: 'Walk Dog', complete: false},
    { name: 'Buy Groceries', complete: true },
    { name: 'Pay Bills', complete: true },
    { name: 'Call Parents', complete: false },
    { name: 'Mail Letter', complete: false }
  ]
}

export default function Task(state=initialState, action) {
  switch(action.type) {

    case TaskActionTypes.ADD_TASK: {
      // TODO: don't allow the user to add empty tasks
      const addTaskList = [
        ...state.tasks,
        {
          name: action.name, complete: false
        }
      ];
      return {
        ...state,
        tasks: addTaskList
      };
    }

    case TaskActionTypes.REMOVE_TASK: {
      const removeTaskList = [
        ...state.tasks.slice(0, action.index),
        ...state.tasks.slice(action.index + 1)
      ]
      return {
        ...state,
        tasks: removeTaskList
      };
    }

    case TaskActionTypes.TOGGLE_COMPLETE: {
      const selectedTask = state.tasks[action.index];
      const updatedTask = Object.assign({}, selectedTask, {
        complete: !selectedTask.complete
      });
      const toggleTasklist = [
        ...state.tasks.slice(0, action.index),
        updatedTask,
        ...state.tasks.slice(action.index + 1)
      ];
      return {
        ...state,
        tasks: toggleTasklist
      };
    }

    default:
      return state;
  }
}