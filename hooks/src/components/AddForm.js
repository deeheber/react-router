import React from 'react';
import PropTypes from 'prop-types';

export default function AddForm (props) {
  const { onAdd, onChange, value } = props;

  return (
    <form onSubmit={onAdd}>
      <input onChange={onChange} value={value} />
      <button type='submit'>Add ToDo</button>
    </form>
  );
}

AddForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
