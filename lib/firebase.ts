// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHoeuIXr2IamaXh6p_O6D43cp1A8chrXs",
  authDomain: "smec2023.firebaseapp.com",
  projectId: "smec2023",
  storageBucket: "smec2023.appspot.com",
  messagingSenderId: "1040236341262",
  appId: "1:1040236341262:web:f12cb73b8614eae652f45f",
  measurementId: "G-2SEMPG66HL"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}