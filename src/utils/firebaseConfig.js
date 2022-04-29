import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1r_SYwm0PL00YYzZGIdK45p-SnKQm7h0",
  authDomain: "cyberale-ch.firebaseapp.com",
  projectId: "cyberale-ch",
  storageBucket: "cyberale-ch.appspot.com",
  messagingSenderId: "69933326178",
  appId: "1:69933326178:web:9726be23d0289f9e0ed63b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;