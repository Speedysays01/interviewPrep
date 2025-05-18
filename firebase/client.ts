// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyOociquI_WICS1Cj9rqe_a5D0Mt__BAE",
  authDomain: "interview-20033.firebaseapp.com",
  projectId: "interview-20033",
  storageBucket: "interview-20033.firebasestorage.app",
  messagingSenderId: "33896056455",
  appId: "1:33896056455:web:a9aba767fcba8c0e725a22",
  measurementId: "G-0FW8ZH7MYC"
};



// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);