import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fishy-fishy-1bfc9.firebaseapp.com",
  databaseURL: "https://fishy-fishy-1bfc9.firebaseio.com",
  projectId: "fishy-fishy-1bfc9",
  storageBucket: "fishy-fishy-1bfc9.appspot.com",
  messagingSenderId: "491986201131",
  appId: "1:491986201131:web:901c945f358bd4857e586e",
  measurementId: "G-ETN33B6C0C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;