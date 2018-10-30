import React, { Fragment, useState } from 'react';
import AddForm from './AddForm';
import List from './List';

export default function App () {
  const [list, setList] = useState([
    { text: 'Go grocery shopping', complete: false },
    { text: 'Feed cats', complete: false },
    { text: 'Water plants', complete: true },
    { text: 'Work out', complete: false }
  ]);

  const [value, setValue] = useState('');

  function handleChange (event) {
    setValue(event.target.value);
  }

  function handleToggleComplete (index) {
    const selectedToDo = list[index];
    const updatedToDo = Object.assign({}, selectedToDo, {
      complete: !selectedToDo.complete
    });
    const updatedList = [
      ...list.slice(0, index),
      updatedToDo,
      ...list.slice(index + 1)
    ];

    setList(updatedList);
  }

  function handleDelete (index) {
    const updatedList = [
      ...list.slice(0, index),
      ...list.slice(index + 1)
    ];

    setList(updatedList);
  }

  function handleAdd (event) {
    event.preventDefault();
    if (!value) return;

    setList([{ text: value, complete: false }, ...list]);
    setValue('');
  }

  return (
    <Fragment>
      <div>
        <AddForm
          value={value}
          onChange={handleChange}
          onAdd={handleAdd}
        />
      </div>
      <div>
        <List
          onToggleComplete={index => handleToggleComplete(index)}
          onDelete={index => handleDelete(index)}
          list={list}
        />
      </div>
    </Fragment>
  );
}
