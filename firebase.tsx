// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCXd0dMR4_DiNss8MIlI1XbAC_WaGTr9g",
    authDomain: "nextauth-firebase-auth.firebaseapp.com",
    projectId: "nextauth-firebase-auth",
    storageBucket: "nextauth-firebase-auth.appspot.com",
    messagingSenderId: "951016257050",
    appId: "1:951016257050:web:677428c56cba2d4926c3a3"
  };

  // Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

export { db, auth, functions };