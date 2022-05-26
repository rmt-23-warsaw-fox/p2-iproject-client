import firebase from "firebase/app";
import "firebase/firestore";

let configurasiToken = {
  apiKey: "AIzaSyDJRzjLxiV9P5d9khSGDDLe75PGORlrp94",
  authDomain: "vue-chat-20909.firebaseapp.com",
  projectId: "vue-chat-20909",
  storageBucket: "vue-chat-20909.appspot.com",
  messagingSenderId: "314707438767",
  appId: "1:314707438767:web:381587d5047cec3c1af85a",
};
firebase.initializeApp(configurasiToken)
export default firebase.firestore();

