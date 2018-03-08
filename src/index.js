import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './firebase';

import './App.css';
import App from './components/App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// const store = createStore();

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {

  }
  else {

  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
