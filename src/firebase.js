import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD6ePC68MqOj4USBNgWCQB2_Mld50HROXw",
    authDomain: "slack-clone-78ad6.firebaseapp.com",
    projectId: "slack-clone-78ad6",
    storageBucket: "slack-clone-78ad6.appspot.com",
    messagingSenderId: "747928224393",
    appId: "1:747928224393:web:73ba97c1863b6e28ebfc58",
    measurementId: "G-P9199H8HXT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth = firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export { auth, provider, db};
