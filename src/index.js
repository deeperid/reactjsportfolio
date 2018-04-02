import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';
import App from './components/App';
import { firebaseApp } from './firebase';
import reducers from './reducers';
import { logUser } from './actions/user.js';

const store = createStore(reducers);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user;
    console.log('store',store);
    store.dispatch(logUser(email));
    console.log('store',store);
  }
  else {

  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
