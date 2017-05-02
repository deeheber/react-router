import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class TaskFilter extends Component {
  static propTypes = {
    filterTasks: PropTypes.func.isRequired,
    selectedFilter: PropTypes.string.isRequired
  };

  state = {
    options: [
      { text: 'All'},
      { text: 'Incomplete'},
      { text: 'Complete'}
    ],
    activeButton: 0
  };

  changeFilter = (text, index) => {
    // dispatch the new view
    this.props.filterTasks(text);
    // mark active button
    this.setState({
      activeButton: index
    });
  };

  render() {
    const { filterTasks, selectedFilter } = this.props;
    return (
      <div className="btn-group">
        {
          this.state.options.map((option, index) => {
            const uniqueKey = uuid.v4();
            const isActive = index === this.state.activeButton ? true : false;
            return (
              <ViewButton 
                key={uniqueKey} 
                text={option.text}
                active={isActive}
                changeView={() => this.changeFilter(option.text, index)}
              />
            );
          })
        }
      </div>
    );
  }
} 

const ViewButton = props => {
  const classes = props.active ? 'btn btn-default active' : 'btn btn-default';
  return (
    <button className={classes} onClick={props.changeView}>{props.text}</button>
  );
};

export default TaskFilter;
