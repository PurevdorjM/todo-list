import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQUoE7fSTAKTrXD8_gQLm2CDhJ9MRV-1g",
    authDomain: "todo-list-260d9.firebaseapp.com",
    projectId: "todo-list-260d9",
    storageBucket: "todo-list-260d9.appspot.com",
    messagingSenderId: "376651609657",
    appId: "1:376651609657:web:1e1bb6dd8e32d0443fffe8",
    measurementId: "G-NXETKK09Z7"
  });



  const db = firebaseApp.firestore();

  export default db;