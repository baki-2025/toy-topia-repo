// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSJ-9OfTULN6u0muKWjNahOc2tzJ_IY4E",
  authDomain: "toytopiaworld-4523c.firebaseapp.com",
  projectId: "toytopiaworld-4523c",
  storageBucket: "toytopiaworld-4523c.firebasestorage.app",
  messagingSenderId: "638837932820",
  appId: "1:638837932820:web:528bf5b219134699337801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
