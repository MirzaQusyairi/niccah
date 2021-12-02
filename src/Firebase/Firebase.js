// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhqEeBG1AKST2QIdvcayUuLdQTRnzi2pU",
  authDomain: "niccah-alterra.firebaseapp.com",
  projectId: "niccah-alterra",
  storageBucket: "niccah-alterra.appspot.com",
  messagingSenderId: "1080003766797",
  appId: "1:1080003766797:web:514555e694c53573bec344",
  measurementId: "G-HYCB2BJHRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
//const analytics = getAnalytics(app);