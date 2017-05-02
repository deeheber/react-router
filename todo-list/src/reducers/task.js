import * as TaskActionTypes from '../actiontypes/task';

// TODO add id key for tasks and remove any references to index positions
const initialState = {
  tasks: [
    { name: 'Walk Dog', complete: false },
    { name: 'Buy Groceries', complete: true },
    { name: 'Pay Bills', complete: true },
    { name: 'Call Parents', complete: false },
    { name: 'Mail Letter', complete: false }
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

    default:
      return state;
  }
}
