import * as TaskActionTypes from '../actiontypes/task';
import uuid from 'uuid';

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
      const id = uuid.v4();
      const addTaskList = [
        ...state.tasks,
        {
          name: action.name, complete: false, id
        }
      ];
      return {
        ...state,
        tasks: addTaskList
      };
    }

    case TaskActionTypes.REMOVE_TASK: {
      const index = state.tasks.findIndex(task => {
        return task.id === action.id;
      });
      const removeTaskList = [
        ...state.tasks.slice(0, index),
        ...state.tasks.slice(index + 1)
      ]
      return {
        ...state,
        tasks: removeTaskList
      };
    }

    case TaskActionTypes.TOGGLE_COMPLETE: {
      const index = state.tasks.findIndex(task => {
        return task.id === action.id;
      });
      const selectedTask = state.tasks[index];
      const updatedTask = Object.assign({}, selectedTask, {
        complete: !selectedTask.complete
      });
      const toggleTasklist = [
        ...state.tasks.slice(0, index),
        updatedTask,
        ...state.tasks.slice(index + 1)
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
      const index = state.tasks.findIndex(task => {
        return task.id === action.id;
      });
      const originalData = state.tasks[index];
      const newData = action.data;
      const updatedTask = Object.assign({}, originalData, newData);
      const taskList = [
        ...state.tasks.slice(0, index),
        updatedTask,
        ...state.tasks.slice(index + 1)
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
