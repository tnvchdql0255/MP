import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDESx0FHm18zHNocRJfZuE4Kweby_xXIGI",
  authDomain: "fbpjct-371d7.firebaseapp.com",
  projectId: "fbpjct-371d7",
  storageBucket: "fbpjct-371d7.appspot.com",
  messagingSenderId: "62047288190",
  appId: "1:62047288190:web:81a18e39b9eeecd8c1912f",
  measurementId: "G-SXYXE4HKT6"
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
const auth = getAuth(app);
export { db, auth };
