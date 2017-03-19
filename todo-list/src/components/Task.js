import React, { PropTypes } from 'react';

const Task = props => {
  return(
    <li><input type="checkbox"/>{props.name}</li>
  );
};

Task.propTypes = {
  name: PropTypes.string.isRequired
};

export default Task;
