import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class Task extends Component {
  staticProptypes = {
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleCompletion: PropTypes.func.isRequired
  };

  state = {
    showModal: false
  }

  open = () => {
    this.setState({
      showModal: true
    });
  };

  close = () => {
    this.setState({
      showModal: false
    });
  }

  render() {
    let isComplete;
    this.props.complete ? isComplete = 'complete' : isComplete = '';

    let handleDelete = this.props.complete ?  this.props.removeTask : this.open;

    return(
      <li className="list-group-item">
        <input 
          type="checkbox" 
          checked={this.props.complete}
          onChange={this.props.toggleCompletion}
        />
        <span className={isComplete}>{this.props.name}</span>
        <button className="btn btn-danger pull-right btn-xs" onClick={handleDelete}>X</button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete {this.props.name}? It is not marked complete.
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-danger' onClick={this.props.removeTask}>Yes</button>
            <button className='btn btn-default' onClick={this.close}>No</button>
          </Modal.Footer>
        </Modal>
      </li>
    );
  }
}

export default Task;
