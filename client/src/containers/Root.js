import React, {Component} from 'react';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import store from '../store/index'
//import registerServiceWorker from './registerServiceWorker';
import App from './App';

class Root extends Component {
  render() {
    return (
      <Provider store={store} >
        <App />
      </Provider>
    )
  }
}

export default Root;
