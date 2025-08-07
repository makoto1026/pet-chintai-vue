// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4NYaIhxwEiE1nsEuMkjlVyozsuanlA9k",
  authDomain: "pet-chintai-vue.firebaseapp.com",
  projectId: "pet-chintai-vue",
  storageBucket: "pet-chintai-vue.firebasestorage.app",
  messagingSenderId: "942562084210",
  appId: "1:942562084210:web:3d9fcb910188d58c4549eb",
  measurementId: "G-5SXXV9YGKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };