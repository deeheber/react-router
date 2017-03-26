import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './app.css';
import App from './src/containers/App';
import TaskReducer from './src/reducers/task';

const store = createStore(
  TaskReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <App />
  </ Provider>,
  document.getElementById('app')
);
