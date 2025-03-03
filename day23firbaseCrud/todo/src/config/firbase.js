// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKUBZr8VUvMoGiBAbSB8oKUksFkDfNi8Q",
  authDomain: "auth-project1-812f6.firebaseapp.com",
  projectId: "auth-project1-812f6",
  storageBucket: "auth-project1-812f6.firebasestorage.app",
  messagingSenderId: "430072620250",
  appId: "1:430072620250:web:5c7272d00580eed09131e3",
  measurementId: "G-WBGRL3K2SL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db };