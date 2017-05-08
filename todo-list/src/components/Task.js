import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import DeleteConfirmModal from './DeleteConfirmModal';
import EditModal from './EditModal';

class Task extends Component {
  staticProptypes = {
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleCompletion: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  state = {
    formName: '',
    showDeleteConfirm: false,
    showEdit: false
  }

  handleNameChange = e => {
    this.setState({
      formName: e.target.value
    })
  }

  handleSubmit = () => {
    const id = this.props.id;
    const newName = 
      this.state.formName.trim() === '' 
      ? this.props.name 
      : this.state.formName.trim()
    const data = {
      name: newName
    };

    this.props.updateTask(id, data);

    this.setState({
      formName: '',
      showEdit: false
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
            onNameChange={e => {this.handleNameChange(e)}}
          />
        </Modal>

        <Modal show={this.state.showEdit} onHide={this.closeEdit}>
          <EditModal 
            onUpdateName={e => this.handleNameChange(e)}
            hide={() => this.closeEdit()}
            name={this.props.name}
            submit={() => {this.handleSubmit()}}
          />
        </Modal>
      </li>
    );
  }
}

export default Task;
