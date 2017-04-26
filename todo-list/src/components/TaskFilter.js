import React from 'react';
import PropTypes from 'prop-types';

const TaskFilter = props => {
  const { filterTasks } = props;
  return (
    <div>
      <label className="radio-inline"><input type="radio" name="taskFilter" value="All" onChange={(e) => filterTasks(e.target.value)}/>All</label>
      <label className="radio-inline"><input type="radio" name="taskFilter" value="Incomplete" onChange={(e) => filterTasks(e.target.value)}/>Incomplete</label>
      <label className="radio-inline"><input type="radio" name="taskFilter" value="Complete" onChange={(e) => filterTasks(e.target.value)}/>Complete</label>
    </div>
  );
};

TaskFilter.propTypes = {
  filterTasks: PropTypes.func.isRequired
}

export default TaskFilter;