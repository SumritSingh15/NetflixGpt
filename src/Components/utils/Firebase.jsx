// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2hmIX7Tpwg_VIgwYQkoPQNlZDnCCvirI",
  authDomain: "netflix-gpt-c1fa4.firebaseapp.com",
  projectId: "netflix-gpt-c1fa4",
  storageBucket: "netflix-gpt-c1fa4.firebasestorage.app",
  messagingSenderId: "774638605961",
  appId: "1:774638605961:web:acb77c67c85f428b2a1858",
  measurementId: "G-YFPSV85D54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();