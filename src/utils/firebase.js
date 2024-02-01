// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_6_OSC9D1ZyNeQc2KZk084TSJlyu5DWA",
  authDomain: "netflix-gpt-f6993.firebaseapp.com",
  projectId: "netflix-gpt-f6993",
  storageBucket: "netflix-gpt-f6993.appspot.com",
  messagingSenderId: "819559445989",
  appId: "1:819559445989:web:ec845521674400cbeeeb0c",
  measurementId: "G-K68WFNGEG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();