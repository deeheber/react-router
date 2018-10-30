import React from 'react';
import PropTypes from 'prop-types';

export default function Item (props) {
  const { text, complete, onToggleComplete, onDelete } = props;

  return (
    <div>
      {text}
      <input
        type='checkbox'
        checked={complete}
        onChange={id => onToggleComplete(props.id)}
      />
      <button onClick={id => onDelete(props.id)}>X</button>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
