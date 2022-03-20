import React from "react";
import firebase from "./firebase";

const Login = () => {

    const signInWIthGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (
        <div>
            <h1>This is the Login page</h1>
            <button onClick={signInWIthGoogle}>Sign in with Google</button>
        </div>
    )
}

export default Login;