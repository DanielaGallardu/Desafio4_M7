// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHepI-C0lI4IO5eZhVl2uPjBW3zm9gBQo",
  authDomain: "desafiofirebase1-60f1b.firebaseapp.com",
  projectId: "desafiofirebase1-60f1b",
  storageBucket: "desafiofirebase1-60f1b.appspot.com",
  messagingSenderId: "225992615920",
  appId: "1:225992615920:web:caf35f4241317d1d199f35"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $db = getFirestore(app)

export { $db }