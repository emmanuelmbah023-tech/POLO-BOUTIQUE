// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";




// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBucAKEaegEuwcy2MGxKwwdrvDEgEteVOI",
  authDomain: "polo-boutique-16d1f.firebaseapp.com",
  projectId: "polo-boutique-16d1f",
  storageBucket: "polo-boutique-16d1f.firebasestorage.app",
  messagingSenderId: "192132279889",
  appId: "1:192132279889:web:66e522226b3cdc81125270",
  
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};