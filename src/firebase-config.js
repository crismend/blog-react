import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeKmkg0P7yhFzhrBtAmYNdK5MCV0318Jo",
  authDomain: "blog-web-76184.firebaseapp.com",
  projectId: "blog-web-76184",
  storageBucket: "blog-web-76184.appspot.com",
  messagingSenderId: "900615039161",
  appId: "1:900615039161:web:e5611df3cb88bad21a9368"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
