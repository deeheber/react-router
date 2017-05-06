import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import DeleteConfirmModal from './DeleteConfirmModal';

class Task extends Component {
  staticProptypes = {
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleCompletion: PropTypes.func.isRequired
  };

  state = {
    showDeleteConfirm: false,
    showEdit: false
  }

  openDeleteConfirm = () => {
    this.setState({
      showDeleteConfirm: true
    });
  };

  closeDeleteConfirm = () => {
    this.setState({
      showDeleteConfirm: false
    });
  }

  openEdit = () => {
    this.setState({
      showEdit: true
    });
  };

  closeEdit = () => {
    this.setState({
      showEdit: false
    });
  }

  render() {
    let isComplete;
    this.props.complete ? isComplete = 'complete' : isComplete = '';

    let handleDelete = this.props.complete ?  this.props.removeTask : this.openDeleteConfirm;

    return(
      <li className="list-group-item">
        <input 
          type="checkbox" 
          checked={this.props.complete}
          onChange={this.props.toggleCompletion}
        />
        <span className={isComplete}>{this.props.name}</span>
        <button className="btn btn-danger pull-right btn-xs" onClick={handleDelete}>Delete</button>
        <button className="btn btn-success pull-right btn-xs" onClick={this.openEdit}>Edit</button>

        <Modal show={this.state.showDeleteConfirm} onHide={this.closeDeleteConfirm}>
          <DeleteConfirmModal 
            hide={() => this.closeDeleteConfirm()} 
            name={this.props.name} 
            removeTask={this.props.removeTask}
          />
        </Modal>

        {/*edit*/}
        <Modal show={this.state.showEdit} onHide={this.closeEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Some form will go here
            hahaha
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-success'>Submit</button>
            <button className='btn btn-default' onClick={this.closeEdit}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </li>
    );
  }
}

export default Task;
