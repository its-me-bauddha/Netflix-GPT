// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCedN8VTkxTkjL1QWkLc0gKf2jj97nzHT0",
  authDomain: "netflixgpt-c89d0.firebaseapp.com",
  projectId: "netflixgpt-c89d0",
  storageBucket: "netflixgpt-c89d0.appspot.com",
  messagingSenderId: "61876423092",
  appId: "1:61876423092:web:ce7fcb0927021f70b48ae1",
  measurementId: "G-4548FHB6XR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
