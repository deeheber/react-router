import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const EditModal = props => {
  const { hide } = props;

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Some form will go here
        hahaha
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-success'>Submit</button>
        <button className='btn btn-default' onClick={props.hide}>Cancel</button>
      </Modal.Footer>
    </div>
  );
};

EditModal.propTypes = {
  hide: PropTypes.func.isRequired
};

export default EditModal;
