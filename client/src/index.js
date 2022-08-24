import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';

import { GoogleOAuthProvider } from '@react-oauth/google';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <GoogleOAuthProvider clientId="792032687392-j3hq14gcdmcv67qmr7nim48mjl0rbjgn.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById('root')
)
