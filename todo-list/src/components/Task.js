import React from 'react';
import PropTypes from 'prop-types';

const Task = props => {
  let isComplete;
  props.complete ? isComplete = 'complete' : isComplete = ''

  return(
    <li className="list-group-item">
      <input 
        type="checkbox" 
        checked={props.complete}
        onChange={props.toggleCompletion}
      />
      <span className={isComplete}>{props.name}</span>
      <button className="btn btn-danger pull-right btn-xs" onClick={props.removeTask}>X</button>
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
