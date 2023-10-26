// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALfAZlueLYou2_ifAWR25Lramj3N5vs-E",
  authDomain: "login-page-e57bd.firebaseapp.com",
  databaseURL: "https://login-page-e57bd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-page-e57bd",
  storageBucket: "login-page-e57bd.appspot.com",
  messagingSenderId: "731111053457",
  appId: "1:731111053457:web:2a15a6e69a77b6d29e4730",
  measurementId: "G-192PE1HVJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();