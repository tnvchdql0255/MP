import { getFirestore, initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDESx0FHm18zHNocRJfZuE4Kweby_xXIGI",
  authDomain: "fbpjct-371d7.firebaseapp.com",
  projectId: "fbpjct-371d7",
  storageBucket: "fbpjct-371d7.appspot.com",
  messagingSenderId: "62047288190",
  appId: "1:62047288190:web:b36df171c5bb1afec1912f",
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
const dbio = getFirestore(app);
const auth = getAuth(app);
export { db, auth, dbio };
