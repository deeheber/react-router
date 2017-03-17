import React from 'react';

const Task = props => {
  return(
    <li><input type="checkbox"/>{props.name}</li>
  );
};

export default Task;
