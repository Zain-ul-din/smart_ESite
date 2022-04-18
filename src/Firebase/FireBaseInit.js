
// firebase initial setup

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'
import {API_KEY} from '../Env'
// .env


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey:  API_KEY,
    authDomain: "ecomappi.firebaseapp.com",
    projectId: "ecomappi",
    storageBucket: "ecomappi.appspot.com",
    messagingSenderId: "875075297054",
    appId: "1:875075297054:web:edc7574b5deb19e4e0f30f",
    measurementId: "G-Y1KERJL4QN"
}




/*    Firebase Exports */

// init app

export const initApp = initializeApp

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

// Add Auth
export function AppAuth () {
  initializeApp(firebaseConfig)
}

// Google Auth Provider
export const googleAuthProvider = new GoogleAuthProvider()

// auth
export const auth = getAuth()

// sign up pop up
export const SignInWithPopup = signInWithPopup

// Sign Out
export const SignOut = signOut

// FireStore
export const FireBaseStore = getFirestore(firebaseApp)

// Storage
export const Storage = getStorage(firebaseApp)

// https://firebase.google.com/docs/firestore/quickstart
// https://firebase.google.com/docs/firestore/manage-data/delete-data
// https://firebase.google.com/docs/firestore/manage-data/add-data

/*
  import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

*/

/*
 import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
*/



/*
 import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
*/



