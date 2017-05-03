import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

 class AddTaskForm extends Component {
    static propTypes = {
      addTask: PropTypes.func.isRequired
    }

    state = {
      name: '',
      showModal: false
    }

    updateTaskName = e => {
      const name = e.target.value;
      this.setState({ name });
    }

    onSubmit = e => {
      if(e) e.preventDefault();
      if(this.state.name.trim() === '') {
        this.setState({ showModal: true });
        return;
      }
      this.props.addTask(this.state.name);
      this.setState({ name: '' });
    }

  closeModal = () => {
    this.setState({
      showModal: false
    });
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
          <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Don't forget to add a name to your task.
            </Modal.Body>
            <Modal.Footer>
              <button className='btn btn-default' onClick={this.closeModal}>Ok</button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
 }

export default AddTaskForm;
