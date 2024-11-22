// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Import the authentication module
import { getFirestore } from 'firebase/firestore';  // Firestore module
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1i_4gQZEwv2K9JvEH28M4R5e72nRv41A",
  authDomain: "nurbekabdiaxatov-54d62.firebaseapp.com",
  projectId: "nurbekabdiaxatov-54d62",
  storageBucket: "nurbekabdiaxatov-54d62.firebasestorage.app",
  messagingSenderId: "349792674380",
  appId: "1:349792674380:web:c1913a35701efcdd100ae9",
  measurementId: "G-QFE161C27F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize other services
const auth = getAuth(app);  // Authentication instance
const db = getFirestore(app);  // Firestore instance
const analytics = getAnalytics(app);  // Analytics instance

// Export the instances
export { auth, db, analytics };

