import React from 'react';
import PropTypes from 'prop-types';

export default function AddForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input onChange={props.onChange} value={props.value} />
      <button type='submit'>Add ToDo</button>
    </form>
  );
}

AddForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
