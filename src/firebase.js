import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBXk6LEbQIsWvtOvf2t6G5IfTF3wsrXEvE",
    authDomain: "chat-3e7b7.firebaseapp.com",
    projectId: "chat-3e7b7",
    storageBucket: "chat-3e7b7.appspot.com",
    messagingSenderId: "688888287968",
    appId: "1:688888287968:web:a5c92943cd77db29607685"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);   
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();