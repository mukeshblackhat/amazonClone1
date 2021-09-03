import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
  apiKey: "AIzaSyBlyl9SsKF95A0mYsVOkm7nj7k5QnswNkU",
  authDomain: "clone-13705.firebaseapp.com",
  projectId: "clone-13705",
  storageBucket: "clone-13705.appspot.com",
  messagingSenderId: "128924364404",
  appId: "1:128924364404:web:8942af63f04afdb7626b21",
  measurementId: "G-P0B7Z3VLBG"

});


const auth = firebaseApp.auth();

export {  auth };
