import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDqB75ovjtuRE01zYC1CkiS6qTs3V4jyEs",
  authDomain: "irctc-clone-7c239.firebaseapp.com",
  projectId: "irctc-clone-7c239",
  storageBucket: "irctc-clone-7c239.firebasestorage.app",
  messagingSenderId: "923051145797",
  appId: "1:923051145797:web:d97b1b1596f338c69c012c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }; // Export the Firebase app