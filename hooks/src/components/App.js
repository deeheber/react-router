import React, { Component, Fragment } from 'react';

import AddForm from './AddForm';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        'Go grocery shopping',
        'Feed cats',
        'Water plants',
        'Work out'
      ],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      list: [this.state.value, ...this.state.list],
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
          {
            this.state.list.map((item, index) => (
              <Item 
                key={index}
                text={item} 
              />
            ))
          }
        </div>
      </Fragment>
    );
  }
}

export default App;
