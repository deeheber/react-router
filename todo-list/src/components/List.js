import React, { PropTypes } from 'react';
import Task from './Task';
import NoTasks from './NoTasks';

const List = props => {
  const taskList = props.data;
  let display;

  if(taskList.length > 0) {
    display = taskList.map((task, index) => {
      return (
        <Task key={index} name={task.name}/>
      );
    });
  } else {
    display = <NoTasks />;
  }

  return(
    <div>
      <h1>{props.header}</h1>
    <ul>
      { display }
    </ul> 
    </div>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired
};

export default List;
