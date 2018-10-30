import React from 'react';
import PropTypes from 'prop-types';

export default function Item(props) {
  return (
    <div>{props.text}</div>
  );
}

Item.propTypes = {
  text: PropTypes.string.isRequired
};
