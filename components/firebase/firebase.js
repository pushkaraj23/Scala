// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXKw1dxB9fdncl03PoqprRW8DkFl7HuRA",
  authDomain: "scala-a3ef8.firebaseapp.com",
  projectId: "scala-a3ef8",
  storageBucket: "scala-a3ef8.firebasestorage.app",
  messagingSenderId: "400514815597",
  appId: "1:400514815597:web:5d15ea1da8ccdd999bd164",
  measurementId: "G-DJR18E7KLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, db };