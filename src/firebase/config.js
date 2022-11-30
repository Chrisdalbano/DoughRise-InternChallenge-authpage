import firebase from 'firebase/app'
import 'firebase/firestore' 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAyEi4ggor_Xl6U269d7quZdGtzxSnZrQ",
    authDomain: "dr-auth-fb.firebaseapp.com",
    projectId: "dr-auth-fb",
    storageBucket: "dr-auth-fb.appspot.com",
    messagingSenderId: "132116040635",
    appId: "1:132116040635:web:6a46c0b4b2b7ffc8f1d29e",
    measurementId: "G-0SWJZBZ385"
    
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //init firestore service
  const projectFirestore = firebase.firestore();

  export { projectFirestore }
