// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzJJ-pgA_wE16BqAsaV7NdR6ppHwhrqW0",
  authDomain: "authenticator-39ce7.firebaseapp.com",
  projectId: "authenticator-39ce7",
  storageBucket: "authenticator-39ce7.appspot.com",
  messagingSenderId: "1063536906606",
  appId: "1:1063536906606:web:7a48521167d21e1dc1b17f",
  measurementId: "G-EXX01RP77D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);