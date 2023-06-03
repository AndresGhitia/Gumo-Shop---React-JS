import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEXmiSNnbt7Oxs_xbuRCN3RNi85sXfeNc",
  authDomain: "tienda-gumo.firebaseapp.com",
  projectId: "tienda-gumo",
  storageBucket: "tienda-gumo.appspot.com",
  messagingSenderId: "118236587816",
  appId: "1:118236587816:web:0d3f9cad33fc2b24b3921d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)