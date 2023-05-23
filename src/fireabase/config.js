import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-OkazlPPDEf88zbBHHjFu1fTo5_lQkZI",
  authDomain: "docs-198c2.firebaseapp.com",
  projectId: "docs-198c2",
  storageBucket: "docs-198c2.appspot.com",
  messagingSenderId: "865946959422",
  appId: "1:865946959422:web:94327e27de1e6d93379b6f",
  measurementId: "G-3JFJQSKP9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
