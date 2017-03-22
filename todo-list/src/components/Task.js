import React, { PropTypes } from 'react';

const Task = props => {
  return(
    <li>
      <input type="checkbox"/>
        {props.name}
      <button onClick={props.removeTask}>X</button>
    </li>
  );
};

Task.propTypes = {
  name: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired
};

export default Task;
