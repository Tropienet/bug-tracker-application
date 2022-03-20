import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import styled from "styled-components";

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    background-color: #495867;
`

const ProfilePicture = styled.img`
    border-radius: 50%;
    align-self: center;
    max-width: 2.5rem;
    max-height: 2.5rem;
    height: auto;
    width: auto;
    margin: 0 2.5rem;
`

const SiteName = styled.h1`
    align-self: center;
    color: #f7f7ff;
    margin: 2.5rem 0 2.5rem 5.5rem;
`

const UserInfoContainer  = styled.div`
    display: flex;
    justify-content: space-evenly
`

const SignOutButton = styled.button`
    border: none;
    align-self: center;
    margin: 0 2.5rem;
    background-color: #577399;
    color: #f7f7ff;
    font-size: 0.8rem;
    padding: 0.1rem 0.4rem;
`

const UserName = styled.h2`
    align-self: center;
    color: #f7f7ff;
    margin: 0 2.5rem;
`

const LinksContainer = styled.div`
    display: flex;
    gap: 29px;
    align-self: center;
`

const PageLink = styled.a`
    color: #f7f7ff;
`

const Navbar = () => {

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
        <NavbarContainer>
            <SiteName>Bug tracker application</SiteName>
            <LinksContainer>
                <PageLink href="Bugs">Bugs</PageLink>
                <PageLink href="/">Home</PageLink>
                <PageLink href="BugSubmitForm">Submit a bug</PageLink>
            </LinksContainer>
            {user 
            ? ( <UserInfoContainer >  
                    <SignOutButton onClick={() =>firebase.auth().signOut()}>Sign out</SignOutButton>
                    <UserName>{user.displayName}</UserName>
                    <ProfilePicture src={user.photoURL} alt="User" />
                </UserInfoContainer>)
            : null}
        </NavbarContainer>
    )
}

export default Navbar;