// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDfEVlGfVWtTG89LP3sb1zqdXSyGNtEQmA",
  authDomain: "openpic-io.firebaseapp.com",
  projectId: "openpic-io",
  storageBucket: "openpic-io.appspot.com",
  messagingSenderId: "336179735489",
  appId: "1:336179735489:web:889a9e6904ea3d91215d40",
  measurementId: "G-TV0W1JM65C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app);


export{analytics, auth, firestore, storage}