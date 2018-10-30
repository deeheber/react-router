import React, { Fragment, useReducer, useState } from 'react';
import AddForm from './AddForm';
import List from './List';
import listReducer from '../reducers/listReducer';

const initialList = [
  { text: 'Go grocery shopping', complete: false },
  { text: 'Feed cats', complete: false },
  { text: 'Water plants', complete: true },
  { text: 'Work out', complete: false }
];

export default function App () {
  const [state, dispatch] = useReducer(listReducer, initialList);
  const [value, setValue] = useState('');

  function handleAdd (event) {
    event.preventDefault();
    const trimmedValue = value.trim();

    // prevents adding empty items
    if (!trimmedValue) {
      window.alert('Please enter a value');
      setValue('');
      return;
    }

    dispatch({ type: 'ADD', value });
    setValue('');
  }

  return (
    <Fragment>
      <div>
        <AddForm
          value={value}
          onChange={event => setValue(event.target.value)}
          onAdd={handleAdd}
        />
      </div>
      <div>
        <List
          onToggleComplete={index => dispatch({ type: 'TOGGLE_COMPLETE', index })}
          onDelete={index => dispatch({ type: 'DELETE', index })}
          list={state}
        />
      </div>
    </Fragment>
  );
}
