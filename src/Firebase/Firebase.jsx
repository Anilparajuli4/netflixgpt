// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOjjeD_eQ1POJta0ZTQQkqSw3WgrKvnOo",
  authDomain: "netflix-e2624.firebaseapp.com",
  projectId: "netflix-e2624",
  storageBucket: "netflix-e2624.appspot.com",
  messagingSenderId: "824389610590",
  appId: "1:824389610590:web:736b8eb6377611138258cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
