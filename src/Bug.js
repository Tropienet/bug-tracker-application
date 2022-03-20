import styled from "styled-components";

const BugContainer = styled.div`
    display: flex;
    flex-direction: column; 
    margin: 2.9rem 10%;
    min-width: 80%;
    border: solid 2px #fe5f55;
    border-radius: 24px;
    padding: 2rem;
    background-color: #495867;
    color: #f7f7ff;
`

const UserInfo = styled.div`
    display: flex;
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

function Bug(props) {
    const { bug } = props;

    return(
        <BugContainer>
            <p>Bug type: {bug.bugType}</p>
            <p>Bug description: <br></br>{bug.bugDescription}</p>
            <UserInfo>
                <p>Submitted by: {bug.submittedby}</p>
                <ProfilePicture src={bug.userPhoto} alt="User who submitted the bug" />
            </UserInfo>
        </BugContainer>
    )
}

export default Bug;