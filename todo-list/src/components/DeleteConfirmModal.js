import React from 'react';
import { Modal } from 'react-bootstrap';

const DeleteConfirmModal = props =>  {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Delete Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete {props.name}? It is not marked complete.
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-danger' onClick={props.removeTask}>Yes</button>
        <button className='btn btn-default' onClick={props.hide}>No</button>
      </Modal.Footer>
    </div>
  );
}

export default DeleteConfirmModal;
