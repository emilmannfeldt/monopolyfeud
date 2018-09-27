import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

//PROD
let prodConfig = {
  apiKey: "AIzaSyBmlzC1tIXR-cmuDLM2VwxgYThOKUsn-H4",
  authDomain: "monopolyfeud-92bc5.firebaseapp.com",
  databaseURL: "https://monopolyfeud-92bc5.firebaseio.com",
  projectId: "monopolyfeud-92bc5",
  storageBucket: "monopolyfeud-92bc5.appspot.com",
  messagingSenderId: "910788521434"
};


//DEV
let devConfig = {
  apiKey: "AIzaSyCRcK1UiO7j0x9OjC_8jq-kbFl9r9d38pk",
  authDomain: "ettkilomjol-dev.firebaseapp.com",
  databaseURL: "https://ettkilomjol-dev.firebaseio.com",
  projectId: "ettkilomjol-dev",
  storageBucket: "ettkilomjol-dev.appspot.com",
  messagingSenderId: "425944588036"
};
const fire = firebase.initializeApp(prodConfig);

export { fire }