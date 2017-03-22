import React, { PropTypes } from 'react';

const Task = props => {
  let isComplete;
  props.complete ? isComplete = 'complete' : isComplete = ''

  return(
    <li className={isComplete}>
      <input 
        type="checkbox" 
        checked={props.complete}
        onChange={props.toggleCompletion}
      />
        {props.name}
      <button onClick={props.removeTask}>X</button>
    </li>
  );
};

Task.propTypes = {
  name: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleCompletion: PropTypes.func.isRequired
};

export default Task;
