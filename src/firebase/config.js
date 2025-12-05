import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPkrgDZtG1GbSPzV9wYi3EO5r5GMYk1yA",
  authDomain: "catmarket-back.firebaseapp.com",
  projectId: "catmarket-back",
  storageBucket: "catmarket-back.appspot.com",
  messagingSenderId: "578271768918",
  appId: "1:578271768918:web:b5f96332b9d18bd8ede6f7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export { app };