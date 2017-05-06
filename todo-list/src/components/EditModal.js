import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const EditModal = props => {
  const { hide, name, onUpdateName, submit } = props;

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type='text' placeholder={name} onChange={onUpdateName}/>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-success' onClick={submit}>Submit</button>
        <button className='btn btn-default' onClick={hide}>Cancel</button>
      </Modal.Footer>
    </div>
  );
};

EditModal.propTypes = {
  hide: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onUpdateName: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

export default EditModal;
