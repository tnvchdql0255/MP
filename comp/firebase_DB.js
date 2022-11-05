// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDESx0FHm18zHNocRJfZuE4Kweby_xXIGI",
  authDomain: "fbpjct-371d7.firebaseapp.com",
  databaseURL: "https://fbpjct-371d7-default-rtdb.firebaseio.com",
  projectId: "fbpjct-371d7",
  storageBucket: "fbpjct-371d7.appspot.com",
  messagingSenderId: "62047288190",
  appId: "1:62047288190:web:150b46ef96b93371c1912f",
  measurementId: "G-MEB406PJR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);