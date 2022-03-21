import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BugTypeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const BugChartContainer = styled.div`
    display: flex;
    width: 60%;
    margin: 0 20%;
`

const BackendInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
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

    const BackendBugColumnStyle = {
        backgroundColor: "red",
        height: `${backendBugCounter*20}px`,
        width: "5rem"
    }

    const BugTypePieChart = {
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        background: `conic-gradient(red ${((backendBugCounter)/(backendBugCounter+frontendBugCounter))*100}%, blue ${((frontendBugCounter)/(backendBugCounter+frontendBugCounter))*100}%)`
    }

    return(
        <BugTypeContainer>
            <p>There is currently {frontendBugCounter} Frontend bugs</p>
            <p>There is currently {backendBugCounter} Backend bugs</p>
            <BugChartContainer>
                <BackendInfoContainer>
                    <div style={BackendBugColumnStyle}></div>
                    <p>There is currently {backendBugCounter} Backend bugs</p>
                </BackendInfoContainer>

            </BugChartContainer>
            <div style={BugTypePieChart}></div>
        </BugTypeContainer>
    )
}

export default BugTypeDisplay