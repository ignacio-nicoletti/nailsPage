import {initializeApp } from "firebase/app";

const firebaseConfig={
  apiKey: "AIzaSyDsPYS1MPIIYY8KafcARth3lttY7krJkBU",
  authDomain: "basenails-c9b17.firebaseapp.com",
  projectId: "basenails-c9b17",
  storageBucket: "basenails-c9b17.appspot.com",
  messagingSenderId: "645397462809",
  appId: "1:645397462809:web:edf4f7be0c22660c51cf88",
  measurementId: "G-57QVEXNER2"
};

const firebaseApp= initializeApp(firebaseConfig);
export default firebaseApp;