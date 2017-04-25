import React from 'react';
import PropTypes from 'prop-types';

const TaskFilter = props => {
  return (
    <div>
      <label className="radio-inline"><input type="radio" name="taskFilter" />All</label>
      <label className="radio-inline"><input type="radio" name="taskFilter" />Incomplete</label>
      <label className="radio-inline"><input type="radio" name="taskFilter" />Complete</label>
    </div>
  );
};

export default TaskFilter;