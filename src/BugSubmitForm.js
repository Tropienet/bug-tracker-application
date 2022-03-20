import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import firebase from "./firebase";
import styled from "styled-components";

const BugFormPageContainer = styled.div`
    display: flex;
    justify-content: center;
`

const BugForm = styled.form`
    align-self: center;
    display: flex;
    flex-direction: column;
    min-width: 80%;
    margin: 2.5rem 10rem;
    gap: 1.2rem;
`

const BugDescriptionText = styled.textarea`
    min-height: 15rem;
    font-size: 1.1rem;
`

const DropdownForBugType = styled.select`
    align-self: flex-start;
`

const ButtonForSubmitting = styled.button`
    align-self: flex-start;
    border: none;
    background-color: #577399;
    color: #f7f7ff;
    font-size: 1.1rem;
    padding: 0.1rem 0.4rem;
`

let db = firebase.firestore();

const BugSubmitForm = () => {
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
            <BugFormPageContainer>
                    <BugForm className="bug-form" onSubmit={handleSubmit}>
                        <h2>Submit A bug</h2>

                        <label>Bug type</label>
                        <DropdownForBugType
                            value={bugType} 
                            onChange={(e) => setBugType(e.target.value)}>
                            <option value="">Select bug type</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                        </DropdownForBugType>

                        <label>Bug description</label>
                        <BugDescriptionText placeholder="Bug description"
                                value={bugDescription}
                                onChange={(e) => setBugDescription(e.target.value)}>
                        </BugDescriptionText>

                        <ButtonForSubmitting type="submit">Submit</ButtonForSubmitting>
                    </BugForm>
            </BugFormPageContainer>
        </div>
    )
}

export default BugSubmitForm;