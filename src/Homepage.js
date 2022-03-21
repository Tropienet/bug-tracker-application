import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Navbar from "./Navbar";
import BugTypeDisplay from "./BugTypeDisplay";

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
            <h1 className="homepage">This is the homepage</h1>
            <BugTypeDisplay bugs={bugs}/>
        </div>
    )
}

export default Homepage;