import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "demo-key",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID || "demo-project",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID || "123456789",
  appId: process.env.REACT_APP_APP_ID || "1:123456789:web:abcdef",
  measurementId: process.env.REACT_APP_MEASUREMENT_ID || "G-XXXXXXXXXX",
});
export const auth = getAuth(firebaseConfig)
