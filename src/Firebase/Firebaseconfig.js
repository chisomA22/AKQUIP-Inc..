import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';







// Your web app's Firebase configuration//
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "akquip-8971e.firebaseapp.com",
  projectId: "akquip-8971e",
  storageBucket: "akquip-8971e.appspot.com",
  messagingSenderId: "77295280708",
  appId: "1:77295280708:web:a3df85377f118931701211",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export default app;