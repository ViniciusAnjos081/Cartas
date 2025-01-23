// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpk_bbv9Xl4FszZtmyK3Z-EWg7fLtys_o",
  authDomain: "cartas-bd88b.firebaseapp.com",
  projectId: "cartas-bd88b",
  storageBucket: "cartas-bd88b.firebasestorage.app",
  messagingSenderId: "243817365739",
  appId: "1:243817365739:web:df9ffb156b508fc3ebfeae",
  measurementId: "G-GJQSTYS2L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 