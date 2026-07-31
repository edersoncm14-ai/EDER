import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
apiKey: "SUA_API_KEY",
authDomain: "SEU_PROJETO.firebaseapp.com",
projectId: "SEU_PROJETO",
storageBucket: "SEU_PROJETO.appspot.com",
messagingSenderId: "XXXXXXXX",
appId: "XXXXXXXX"
};
 
const app = initializeApp(firebaseConfig);
 
export const db = getFirestore(app);
