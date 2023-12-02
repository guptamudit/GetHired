// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "Your Key",
  authDomain: "mern-job-portal-a7798.firebaseapp.com",
  projectId: "Your ID",
  storageBucket: "mern-job-portal-a7798.appspot.com",
  messagingSenderId: "Your ID",
  appId: "Your ID",
  measurementId: "Your ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
