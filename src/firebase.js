// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDIVtTwAe2egxMZGvNZ1Op4t0L4UUWj9A",
  authDomain: "clone-e516c.firebaseapp.com",
  projectId: "clone-e516c",
  storageBucket: "clone-e516c.appspot.com",
  messagingSenderId: "850395957352",
  appId: "1:850395957352:web:f265af29cd16e6115193dd",
  measurementId: "G-VZJE1M5N7S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };



