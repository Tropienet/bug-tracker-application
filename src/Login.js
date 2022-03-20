import React from "react";
import firebase from "./firebase";
import styled from "styled-components";

const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    min-width: 100%;
    background-color: #577399;
`

const LoginInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: #f7f7ff;
    height: 25.5rem;
`

const LoginButton = styled.button`
    border: none;
    align-self: center;
    margin: 0 2.5rem;
    background-color: #495867;
    color: #bdd5ea;
    font-size: 1.1rem;
    padding: 0.2rem 0.7rem;
`

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
        <LoginPageContainer>
            <LoginInfoContainer>
                <h1 className="login-header">Bug tracker application</h1>
                <LoginButton onClick={signInWIthGoogle}>Sign in with Google</LoginButton>
            </LoginInfoContainer>
        </LoginPageContainer>
    )
}

export default Login;