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

const BugAmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 1.5rem; 
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
            <ChartsContainer>
                <BugBarChart className="bar-chart" backendBugs={backendBugCounter} frontendBugs={frontendBugCounter}/>
                <BugPieChart backendBugs={backendBugCounter} frontendBugs={frontendBugCounter}/>
            </ChartsContainer>
            <BugAmountContainer>
                <p>There is currently {frontendBugCounter} Frontend bugs</p>
                <p>There is currently {backendBugCounter} Backend bugs</p>
            </BugAmountContainer>
        </BugTypeContainer>
    )
}

export default BugTypeDisplay