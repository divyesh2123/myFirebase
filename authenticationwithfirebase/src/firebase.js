import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAtwfvx84O1mXp8iiKnjYfsux0lnIQ5Tww",
  authDomain: "myautentication-da767.firebaseapp.com",
  databaseURL: "https://myautentication-da767-default-rtdb.firebaseio.com",
  projectId: "myautentication-da767",
  storageBucket: "myautentication-da767.appspot.com",
  messagingSenderId: "640887822642",
  appId: "1:640887822642:web:4d79781ab8b90d1a999f2b",
  measurementId: "G-8N971M94F7"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };
