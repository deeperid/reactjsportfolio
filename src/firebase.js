import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAI2w2qvOAB1qJ0Eff2YDnYJLs3U9ryh1M",
  authDomain: "reactjsportfolio.firebaseapp.com",
  databaseURL: "https://reactjsportfolio.firebaseio.com",
  projectId: "reactjsportfolio",
  storageBucket: "reactjsportfolio.appspot.com",
  messagingSenderId: "1010832982840"
};

export const firebaseApp = firebase.initializeApp(config);
