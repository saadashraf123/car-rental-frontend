import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyZoZmEgF_Z0OhdvV1InmyrLtqsSoyRJw",
    authDomain: "car-rental-website-a7e5f.firebaseapp.com",
    projectId: "car-rental-website-a7e5f",
    storageBucket: "car-rental-website-a7e5f.appspot.com",
    messagingSenderId: "644986899737",
    appId: "1:644986899737:web:a2c5ef3d3d1ceb66f90988",
    measurementId: "G-NX69RBJK9P"
};

const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);
export default app
export { db };
