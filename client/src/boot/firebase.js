import "firebase/firestore";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkbIRnR-EEIhCWpZXIz9J0YXE4F5H9HwM",
  authDomain: "antre-a4791.firebaseapp.com",
  projectId: "antre-a4791",
  storageBucket: "antre-a4791.appspot.com",
  messagingSenderId: "738790150882",
  appId: "1:738790150882:web:cfd648d32d2be496efc4bb"
}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export default db