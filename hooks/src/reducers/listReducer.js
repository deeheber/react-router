export default function listReducer (state, action) {
  switch (action.type) {
    case 'TOGGLE_COMPLETE':
      const selectedToDo = state[action.index];
      const toggledToDo = Object.assign({}, selectedToDo, {
        complete: !selectedToDo.complete
      });
      const toggledList = [
        ...state.slice(0, action.index),
        toggledToDo,
        ...state.slice(action.index + 1)
      ];

      return toggledList;
    case 'ADD':
      return [{ text: action.value, complete: false }, ...state];
    case 'DELETE':
      const updatedList = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

      return updatedList;
    default:
      return [ ...state ];
  }
}
