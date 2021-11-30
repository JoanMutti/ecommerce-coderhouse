// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { collection, getFirestore } from "firebase/firestore";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//method to return firestore database with config
const getFirestoreDb = () => {
    return getFirestore(app)
}

//method to return collection
const getCollection = (db, path) => {
  return collection(db,path)
}

export {
    app,
    getFirestoreDb,
    getCollection
}