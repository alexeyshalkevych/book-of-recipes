// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDzQMWiK007Moog_T8BSEeZDjtYwQwb1tE',
  authDomain: 'alexcode-book-of-recipes.firebaseapp.com',
  databaseURL: 'https://alexcode-book-of-recipes.firebaseio.com',
  projectId: 'alexcode-book-of-recipes',
  storageBucket: 'alexcode-book-of-recipes.appspot.com',
  messagingSenderId: '949923603478',
  appId: '1:949923603478:web:19746653ff9266c606c137',
  measurementId: 'G-Q6J9WYJKP6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const dataBase = firebase.firestore();