import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGt51M6OIfgBaFZqnxdb-6azKOQA_gjMs",
  authDomain: "chat-4eedf.firebaseapp.com",
  projectId: "chat-4eedf",
  storageBucket: "chat-4eedf.appspot.com",
  messagingSenderId: "852337968611",
  appId: "1:852337968611:web:8283a37249682642f4ccd6",
  measurementId: "G-W0E078EWR1",
};

let app;
if (firebase.app.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

export { db, auth };
