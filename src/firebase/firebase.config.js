// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnP1CofgF4AYIbX_FYOmEKH7-BE_c0gSg",
  authDomain: "fake-news-e6f2a.firebaseapp.com",
  projectId: "fake-news-e6f2a",
  storageBucket: "fake-news-e6f2a.appspot.com",
  messagingSenderId: "431087279654",
  appId: "1:431087279654:web:20e2b7842d2272616c90e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;