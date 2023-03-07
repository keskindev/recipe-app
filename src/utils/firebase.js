import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyArJYx0lw4w5RVmWCSDMg0CF6ouqbkf-E0",
  authDomain: "fire-contact-cee58.firebaseapp.com",
  databaseURL: "https://fire-contact-cee58-default-rtdb.firebaseio.com",
  projectId: "fire-contact-cee58",
  storageBucket: "fire-contact-cee58.appspot.com",
  messagingSenderId: "211878412846",
  appId: "1:211878412846:web:97e61e6ad5169d856795bf",
};
const firebase = initializeApp(firebaseConfig);
export default firebase;
