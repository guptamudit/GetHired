// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "mern-job-portal-a7798.firebaseapp.com",
  projectId: "mern-job-portal-a7798",
  storageBucket: "mern-job-portal-a7798.appspot.com",
  messagingSenderId: "messagingSenderId",
  appId: "APP ID",
  measurementId: "measurementId",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
