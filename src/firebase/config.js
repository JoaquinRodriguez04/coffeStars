// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBww-cZMwtHiC_MGaHs2Vmm_Xm-Hbjl-AA",
  authDomain: "coffestars-f0054.firebaseapp.com",
  projectId: "coffestars-f0054",
  storageBucket: "coffestars-f0054.appspot.com",
  messagingSenderId: "216308290178",
  appId: "1:216308290178:web:fb2f310578d2cb3adb9a9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);