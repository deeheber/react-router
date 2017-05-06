import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const DeleteConfirmModal = props =>  {
  const { hide, name, removeTask } = props;

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Delete Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete {name}? It is not marked complete.
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-danger' onClick={removeTask}>Yes</button>
        <button className='btn btn-default' onClick={hide}>No</button>
      </Modal.Footer>
    </div>
  );
}

DeleteConfirmModal.propTypes = {
  hide: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired
};

export default DeleteConfirmModal;
