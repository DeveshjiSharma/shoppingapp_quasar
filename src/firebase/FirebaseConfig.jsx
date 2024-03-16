// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCugC57JfbtNpX5zdfJd9e93q5yuhWVlA8",
  authDomain: "ramlaxmanhanuman-b8760.firebaseapp.com",
  projectId: "ramlaxmanhanuman-b8760",
  storageBucket: "ramlaxmanhanuman-b8760.appspot.com",
  messagingSenderId: "492489891951",
  appId: "1:492489891951:web:3365162ddbb8da7f6eed9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
