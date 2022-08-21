import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)