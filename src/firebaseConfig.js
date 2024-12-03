import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-c1_06-_GS4ovqTimfPdD4mW4dC9p8m4",
    authDomain: "backend-my-app-store.firebaseapp.com",
    projectId: "backend-my-app-store",
    storageBucket: "backend-my-app-store.firebasestorage.app",
    messagingSenderId: "610265546176",
    appId: "1:610265546176:web:09b11f2a4a32ef21451c25"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);