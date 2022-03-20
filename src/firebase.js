import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCxfzxRpnqm7r1zY1x4BOsinIz0kszi6eY",

    authDomain: "bug-tracker-app-c6687.firebaseapp.com",
  
    projectId: "bug-tracker-app-c6687",
  
    storageBucket: "bug-tracker-app-c6687.appspot.com",
  
    messagingSenderId: "408977800353",
  
    appId: "1:408977800353:web:78ca8ec007c792e62a04e0"  
})

export default firebase;