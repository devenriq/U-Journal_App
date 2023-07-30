// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvX7oPDYIHt3kl4Pw68jY923DMiy-vj28",
  authDomain: "ract-curso.firebaseapp.com",
  projectId: "ract-curso",
  storageBucket: "ract-curso.appspot.com",
  messagingSenderId: "95023193269",
  appId: "1:95023193269:web:6cebf7fa7a8e25ae66b2fc",
  measurementId: "G-2G1MRWT5HT",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
