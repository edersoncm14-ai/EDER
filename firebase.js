import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
apiKey: "AIzaSyAugfSmX4tNmChxGPE3HMe2QDrECDFFvrk",
authDomain: "cafeerp-32b7a.firebaseapp.com",
projectId: "cafeerp-32b7a",
storageBucket: "cafeerp-32b7a.firebasestorage.app",
messagingSenderId: "616671677234",
appId: "1:616671677234:web:944164759933e5004f252b",
measurementId: "G-S9NV4JFE0L"
};
 
const app = initializeApp(firebaseConfig);
 
export const db = getFirestore(app);
