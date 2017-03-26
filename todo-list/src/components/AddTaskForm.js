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
        <div className="container-fluid">
          <form onSubmit={this.onSubmit} className="row">
              <input 
                className="col-md-10"
                type="text"
                placeholder="Task Name" 
                value={this.state.name}
                onChange={this.updateTaskName}
              />
              <input className="btn btn-success btn-md pull-right" type="submit" value="Add" />
          </form>
        </div>
      );
    }
 }

export default AddTaskForm;
