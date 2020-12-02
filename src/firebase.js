import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfMnVw-wtSIX2Kc3ibfC94scThPgNr-TM",
    authDomain: "fire-632de.firebaseapp.com",
    databaseURL: "https://fire-632de.firebaseio.com",
    projectId: "fire-632de",
    storageBucket: "fire-632de.appspot.com",
    messagingSenderId: "784461563642",
    appId: "1:784461563642:web:bae96ca5ba15f21bf5ab43",
    measurementId: "G-101Q9BJ3RN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const auth = firebase.auth();

  export {db ,auth};