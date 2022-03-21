import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Navbar from "./Navbar";
import BugTypeDisplay from "./BugTypeDisplay";
import styled from "styled-components";

const SiteDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Homepage = () => {
    const [bugs, setBugs] = useState([]);
    const [loading,setLoading] = useState(false);

    const ref = firebase.firestore().collection("bugs");

    function getBugs() {
        
        setLoading(true);
        
        ref.onSnapshot((querySnapshot) => {
            const bugsDB = [];
            querySnapshot.forEach((doc) => {
                bugsDB.push(doc.data());
            });
            setBugs(bugsDB)
            setLoading(false);
        })
    }

    useEffect(() => {
        
        getBugs();

    }, []);

    if(loading) {
        return <h1>Loading...</h1>
    }
  
    return (
        <div>
            <Navbar />
            <SiteDescription>
                <h2 className="welcome-text">Welcome to my bug tracking application.</h2>
                <p className="try-text">Try posting or deleting bugs</p>
            </SiteDescription>
            <BugTypeDisplay bugs={bugs}/>
        </div>
    )
}

export default Homepage;