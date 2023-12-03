// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXaVo6y4N-PG-MSO0luDWxZZ_yhSvi1PM",
  authDomain: "mern-job-portal-a7798.firebaseapp.com",
  projectId: "mern-job-portal-a7798",
  storageBucket: "mern-job-portal-a7798.appspot.com",
  messagingSenderId: "880062420662",
  appId: "1:880062420662:web:2ba2d56663886aac6cb817",
  measurementId: "G-7M97H8JS3M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
