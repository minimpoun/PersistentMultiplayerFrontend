import firebase from "firebase/app";
import "firebase/auth";
import config from './config'

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

export { firebase };