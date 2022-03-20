import React, { useState, useEffect } from "react";
import firebase from "./firebase";

const Homepage = () => {

    const [user,setUser] = useState(() => firebase.auth().currentUser);

    useEffect(() => {
        const result = firebase.auth().onAuthStateChanged(user => {
            if(user) {
                setUser(user)
            } else {
                setUser(false);
            }
        })
        return result;
    }, [])

    return (
        <div>
            <h1>This is the homepage</h1>
            {user 
            ? ( <>
                    <p>{user.displayName}</p>
                    <img src={user.photoURL} alt="User" />
                    <button onClick={() =>firebase.auth().signOut()}>Sign out</button>
                </>)
            : null}
        </div>
    )
}

export default Homepage;