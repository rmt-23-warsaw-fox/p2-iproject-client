import { defineStore } from 'pinia'
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2xQR0_cGrGXyh-a-XnCrBPb6L-irWAQw",
  authDomain: "pablostory-web-app.firebaseapp.com",
  projectId: "pablostory-web-app",
  storageBucket: "pablostory-web-app.appspot.com",
  messagingSenderId: "425699556509",
  appId: "1:425699556509:web:61e3bb1927f083c5b6a874",
  measurementId: "G-NS46R3LV0K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const useChatFirebaseStore = defineStore({
  id: 'chatFirebase',
  state: () => ({
    counter: 0,
    chats: []
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    sendMessage(data) {
      // console.log('----->', data);
      // console.log("oiii");
      // db.collection("chats").add({
      //   data
      // })
      //   .then((docRef) => {
      //     console.log("Document written with ID: ", docRef.id);
      //     // this.router.push('/chat')
      //   })
      //   .catch((error) => {
      //     console.error("Error adding document: ", error);
      //   });

      var newChatRef = db.collection("chats").doc();
      newChatRef.set(data);
    },

    fetchMessage() {
      // this.chats = []

      // last
      db.collection("chats").orderBy('createdAt', 'asc')
        .onSnapshot((snapshot) => {
          let coba = []
          snapshot.docChanges().forEach((change) => {
            coba.push(change.doc.data())
            this.chats.push(change.doc.data())
          });

          console.log('>>>>>>>>>>>>>>>>>>>>..', this.chats);
        });

      // db.collection("chats").orderBy('createdAt', 'asc')
      //   .get()
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       // doc.data() is never undefined for query doc snapshots
      //       this.chats.push(doc.data())
      //     });
      //     console.log(this.chats);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      // db.collection("chats").orderBy('createdAt', 'asc')
      //   .onSnapshot((querySnapshot) => {
          
      //     querySnapshot.forEach((doc) => {
      //       this.chats.push(doc.data());
      //     });
      //     console.log("Current cities in CA: ", this.chats);
      //   });
    },

    listenNewMessage() {
      db.collection("chats").orderBy('createdAt', 'asc')
        .onSnapshot((querySnapshot) => {
          
          querySnapshot.forEach((doc) => {
            this.chats.push(doc.data());
          });
          console.log("Current cities in CA: ", this.chats);
        });
    }
  }
})
