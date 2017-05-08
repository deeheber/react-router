import * as TaskActionTypes from '../actiontypes/task';

// TODO fix reducer functions to take an id instead of an index
const initialState = {
  tasks: [
    { name: 'Walk Dog', complete: false, id: 1 },
    { name: 'Buy Groceries', complete: true, id: 2 },
    { name: 'Pay Bills', complete: true, id: 3 },
    { name: 'Call Parents', complete: false, id: 4 },
    { name: 'Mail Letter', complete: false, id: 5 }
  ],
  selectedFilter: 'All'
}

export default function Task(state=initialState, action) {
  switch(action.type) {

    case TaskActionTypes.ADD_TASK: {
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

    case TaskActionTypes.FILTER_TASKS: {
      const selectedFilter = action.filter;
      return {
        ...state,
        selectedFilter
      }
    }

    case TaskActionTypes.UPDATE_TASK: {
      const originalData = state.tasks[action.index];
      const newData = action.data;
      const updatedTask = Object.assign({}, originalData, newData);
      const taskList = [
        ...state.tasks.slice(0, action.index),
        updatedTask,
        ...state.tasks.slice(action.index + 1)
      ];
      return {
        ...state,
        tasks: taskList
      }
    }

    default:
      return state;
  }
}
