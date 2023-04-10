// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage, auth };
