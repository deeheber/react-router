import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default function List (props) {
  const { list, onToggleComplete, onDelete } = props;

  const listJSX = list.map((item, index) => (
    <Item
      key={index}
      id={index}
      text={item.text}
      complete={item.complete}
      onToggleComplete={onToggleComplete}
      onDelete={onDelete}
    />
  ));

  return (
    <Fragment>
      {listJSX}
    </Fragment>
  );
}

List.defaultProps = {
  list: []
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool
  })).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
