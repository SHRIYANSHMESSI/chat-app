import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB6Deglk8wG_VcEtGnvKLf_Z54WMuw-II8",
  authDomain: "chat-app-83ea8.firebaseapp.com",
  projectId: "chat-app-83ea8",
  storageBucket: "chat-app-83ea8.appspot.com",
  messagingSenderId: "801012580716",
  appId: "1:801012580716:web:6d40d33c5b800dc546f349",
  measurementId: "G-161XLVMD5Q"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
}
// const analytics = getAnalytics(app);