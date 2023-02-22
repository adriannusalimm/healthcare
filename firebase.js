// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhA4fORTw3PPucAkAn5oxflAytB65ewtY",
  authDomain: "jdf1352-9fadc.firebaseapp.com",
  projectId: "jdf1352-9fadc",
  storageBucket: "jdf1352-9fadc.appspot.com",
  messagingSenderId: "277973123656",
  appId: "1:277973123656:web:637fe0ba439f81fef64e7d"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth, db };