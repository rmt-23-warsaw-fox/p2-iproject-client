// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt_FyQfv-zQ0hsb9G1uw56v7zTjFEbvqw",
  authDomain: "music-app-49be9.firebaseapp.com",
  databaseURL: "https://music-app-49be9-default-rtdb.firebaseio.com",
  projectId: "music-app-49be9",
  storageBucket: "music-app-49be9.appspot.com",
  messagingSenderId: "385415163717",
  appId: "1:385415163717:web:1d1639727c6fcb98afd82c",
  measurementId: "G-Q6EP9N2CXL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);