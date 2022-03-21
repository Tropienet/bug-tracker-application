import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BugPieChart from "./BugPieChart";
import BugBarChart from "./BugBarChart";

const BugTypeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ChartsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

function BugTypeDisplay(props) {
    const {bugs} = props;
    const [backendBugCounter, setBackendBugCounter] = useState(0);
    const [frontendBugCounter, setFrontendBugCounter] = useState(0);

    function countBugTypes() {
        let backendBugs = 0;
        let frontendBugs = 0;
        bugs.forEach(bug => {
            if(bug.bugType==="Backend"){
                backendBugs +=1;
            }else{
                frontendBugs+=1;
            }
        });
        setBackendBugCounter(backendBugs);
        setFrontendBugCounter(frontendBugs);
    }

    useEffect(() => {

        countBugTypes();

    }, [])

    return(
        <BugTypeContainer>
            <p>There is currently {frontendBugCounter} Frontend bugs</p>
            <p>There is currently {backendBugCounter} Backend bugs</p>
            <ChartsContainer>
                <BugBarChart className="bar-chart" backendBugs={backendBugCounter} frontendBugs={frontendBugCounter}/>
                <BugPieChart backendBugs={backendBugCounter} frontendBugs={frontendBugCounter}/>
            </ChartsContainer>
        </BugTypeContainer>
    )
}

export default BugTypeDisplay