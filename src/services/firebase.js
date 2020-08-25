import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC3i8w3SwmruXHliWh8QLh17mXXnGTinkg",
    authDomain: "w-chatting.firebaseapp.com",
    databaseURL: "https://w-chatting.firebaseio.com",
    projectId: "w-chatting",
    storageBucket: "w-chatting.appspot.com",
    messagingSenderId: "736026833934",
    appId: "1:736026833934:web:7cb3392241cad4e6cff85f",
    measurementId: "G-ST74TKGWYL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth=firebase.auth;
  export const db=firebase.database();
  