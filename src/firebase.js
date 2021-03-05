import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// zamiijeniti s vašom konfiguracijom!
var firebaseConfig = {
    apiKey: "AIzaSyA3cbCPUaN-nJVLNxdQpIgmh2zHizyWJDA",
    authDomain: "phonest-cc264.firebaseapp.com",
    projectId: "phonest-cc264",
    storageBucket: "phonest-cc264.appspot.com",
    messagingSenderId: "83753879560",
    appId: "1:83753879560:web:72e344834cae3b3a3fa9bd",
    measurementId: "G-KQ4FDK2N8R"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
export { firebase, db };