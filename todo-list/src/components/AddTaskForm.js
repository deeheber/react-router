import React, { Component, PropTypes } from 'react';

 class AddTaskForm extends Component {
    static propTypes = {
      addTask: PropTypes.func.isRequired
    }

    state = {
      name: ''
    }

    updateTaskName = e => {
      const name = e.target.value;
      this.setState({ name });
    }

    onSubmit = e => {
      if(e) e.preventDefault();
      this.props.addTask(this.state.name);
      this.setState({ name: '' });
    }

    render() {
      return (
        <div>
          <h1>Add item</h1>
          <form onSubmit={this.onSubmit}>
            <input 
              type="text"
              placeholder="Task Name" 
              value={this.state.name}
              onChange={this.updateTaskName}
            />
            <input type="submit" value="Add" />
          </form>
        </div>
      );
    }
 }

export default AddTaskForm;
