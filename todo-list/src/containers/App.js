import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Add item</h1>
          <form>
            <input type="text" />
            <button>Add</button>
          </form>
        </div>
        <div>
          <h1>To Do</h1>
          <ul>
            <li><input type="checkbox"/>Stuff</li>
            <li><input type="checkbox"/>Things</li>
            <li><input type="checkbox"/>Other things</li>
          </ul>
        </div>
        <div>
          <h1>Complete</h1>
          <ul>
            <li><input type="checkbox" checked="true"/>Complete stuff</li>
            <li><input type="checkbox" checked="true"/>Complete things</li>
            <li><input type="checkbox"checked="true"/>Other things that are complete</li>
          </ul>
        </div>
      </div>

    );
  }
}