import React, { PropTypes } from 'react';

const Task = props => {
  return(
    <li>
      <input type="checkbox"/>
        {props.name}
      <button>X</button>
    </li>
  );
};

Task.propTypes = {
  name: PropTypes.string.isRequired
};

export default Task;
