// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtECed2cPFlwUAfhB8xFveIQIDP_wWuoQ",
  authDomain: "nextauth-firebase-adapter.firebaseapp.com",
  projectId: "nextauth-firebase-adapter",
  storageBucket: "nextauth-firebase-adapter.appspot.com",
  messagingSenderId: "683746628097",
  appId: "1:683746628097:web:dd460fd300a52f23106600",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export { app };
