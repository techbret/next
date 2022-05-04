import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDfJOJXqptUVulKlvAhcfFZCsBucZs02O8",
  authDomain: "nextfire-c438f.firebaseapp.com",
  projectId: "nextfire-c438f",
  storageBucket: "nextfire-c438f.appspot.com",
  messagingSenderId: "704414707671",
  appId: "1:704414707671:web:897f499c93a0330c596592",
  measurementId: "G-DKZETYW14Y"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();