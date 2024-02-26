// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw9JLeLulv4NWcfXmiASirOhw8OCY0fCQ",
  authDomain: "svelteapp-ae112.firebaseapp.com",
  projectId: "svelteapp-ae112",
  storageBucket: "svelteapp-ae112.appspot.com",
  messagingSenderId: "57862613065",
  appId: "1:57862613065:web:82f060baffc23e522cf798",
  measurementId: "G-G4HER55F96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
export const analytics = getAnalytics(app);