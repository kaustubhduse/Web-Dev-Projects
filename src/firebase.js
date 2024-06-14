
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDNjN7G7mzrbrnAT3sSHxcN3YMJ__ZnxLA",
    authDomain: "react-portfolio-a0c1c.firebaseapp.com",
    projectId: "react-portfolio-a0c1c",
    storageBucket: "react-portfolio-a0c1c.appspot.com",
    messagingSenderId: "305839328356",
    appId: "1:305839328356:web:499e1585bbe8253ee92371",
    measurementId: "G-19QMPYG7YN"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);