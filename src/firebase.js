import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxbmloA_K6wManEU4MqSamN8IZVKagbUY",
  authDomain: "xyz123-65500.firebaseapp.com",
  projectId: "xyz123-65500",
  storageBucket: "xyz123-65500.appspot.com",
  messagingSenderId: "988427648331",
  appId: "1:988427648331:web:47bb197e4a9fa33c0dfcce",
  measurementId: "G-R5GM2Z353D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);