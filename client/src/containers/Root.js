import React from 'react';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import store from '../store/index'
//import registerServiceWorker from './registerServiceWorker';
import App from './App';

export default class Root extends React.Component {
  render() {
    return (
      <div>
      <Provider store={store} >
        <App />
      </Provider>
      </div>
    )
  }
}
