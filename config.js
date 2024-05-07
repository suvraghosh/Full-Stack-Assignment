import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCR9I1UVGINX9jbLoCOauv9ZscoGs4fJaY",
  authDomain: "signup-1f1e3.firebaseapp.com",
  projectId: "signup-1f1e3",
  storageBucket: "signup-1f1e3.appspot.com",
  messagingSenderId: "782018687305",
  appId: "1:782018687305:web:a02e543fe4b918d3112a98",
  measurementId: "G-XFRK5XCMYE"
}

const app = initializeApp(firebaseConfig);

export default app;