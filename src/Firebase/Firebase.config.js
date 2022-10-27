// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apikey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyChxHZPJ7qCKPcfzlq_oh1z_CT6hWXRdVc",
  authDomain: "shikho-learning-app.firebaseapp.com",
  projectId: "shikho-learning-app",
  storageBucket: "shikho-learning-app.appspot.com",
  messagingSenderId: "674261938996",
  appId: "1:674261938996:web:2f52139ef5e7bc79192b61",
  measurementId: "G-VMWNYGFZ5B"
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;