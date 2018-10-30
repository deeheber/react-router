import React from 'react';
import PropTypes from 'prop-types';

export default function Item(props) {
  return (
    <div>
      {props.text}
      <input
        type='checkbox'
        checked={props.complete}
        onChange={id => props.onCheckBoxChange(props.id)}
      />
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  onCheckBoxChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
