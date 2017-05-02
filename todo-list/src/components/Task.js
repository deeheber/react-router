import React from 'react';
import PropTypes from 'prop-types';

const Task = props => {
  let isComplete;
  props.complete ? isComplete = 'complete' : isComplete = '';

  function deleteConfirm() {
    // TODO make this prettier than the standard confirm dialog
    const confirmed = confirm('This task is not yet complete. Are you sure you want to delete?');

    confirmed ? props.removeTask() : '';
  }

  let handleDelete = props.complete ?  props.removeTask : deleteConfirm;

  return(
    <li className="list-group-item">
      <input 
        type="checkbox" 
        checked={props.complete}
        onChange={props.toggleCompletion}
      />
      <span className={isComplete}>{props.name}</span>
      <button className="btn btn-danger pull-right btn-xs" onClick={handleDelete}>X</button>
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
