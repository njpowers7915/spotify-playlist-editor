import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
//import './index.css';
//import store from './store/index'
//import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
