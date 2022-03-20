import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import firebase from "./firebase";

let db = firebase.firestore();

const Homepage = () => {
    const [bugType, setBugType] = useState("");
    const [bugDescription, setBugDescription] = useState("");
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

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("bugs").add({
            bugType: bugType,
            bugDescription: bugDescription,
            submittedby: user.displayName,     
            userPhoto: user.photoURL,    
        })
        .then(() => {
            alert("Bug has been submitted")
        })
        .catch((error) => {
            alert(error.message);
        });

        setBugType("");
        setBugDescription("");
    }

    return (
        <div>
            <Navbar />
            <h1>This is the homepage</h1>
            <form className="bug-form" onSubmit={handleSubmit}>
                <h2>Submit A bug</h2>

                <label>Bug type</label>
                <select 
                    value={bugType} 
                    onChange={(e) => setBugType(e.target.value)}>
                    <option value="">Select bug type</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>

                <label>Bug description</label>
                <textarea placeholder="Bug description"
                          value={bugDescription}
                          onChange={(e) => setBugDescription(e.target.value)}>
                </textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Homepage;