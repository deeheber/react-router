import React, { Component, Fragment } from 'react';

import AddForm from './AddForm';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { text: 'Go grocery shopping', complete: false },
        { text: 'Feed cats', complete: false },
        { text: 'Water plants', complete: true },
        { text: 'Work out', complete: false}
      ],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleCheckbox(index) {
    const selectedToDo = this.state.list[index];
    const updatedToDo = Object.assign({}, selectedToDo, {
      complete: !selectedToDo.complete
    });
    const updatedList = [
      ...this.state.list.slice(0, index),
      updatedToDo,
      ...this.state.list.slice(index + 1)
    ];

    this.setState({
      list: updatedList
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      list: [{ text: this.state.value, complete: false }, ...this.state.list],
      value: ''
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <AddForm
            value={this.state.value}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
        <div>
          <List
            onCheckBoxChange={index => this.handleCheckbox(index)}
            list={this.state.list}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
