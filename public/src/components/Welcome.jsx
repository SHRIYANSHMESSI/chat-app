import React, {useState,  useEffect} from 'react'
import styled from 'styled-components'
import Robot from "../assets/robot.gif"
import Logout from "./Logout";

export default function Welcome({currentUser}) {

    // const [userName, setUserName] = useState("");

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setUserName(
    //             await JSON.parse(
    //             localStorage.getItem("chat-app-user")
    //             ).username
    //         );
    //     }
    //     fetchData();
    // }, []);

  return ( 
    <>
        <Container>
            <img src={Robot} alt="Robot" />
            <h1>Welcome, <span>{currentUser.username}!</span></h1>
            <h3>Please select a chat to Start messaging.</h3>
            <p><Logout /></p>
            <h4>Logout</h4>
        </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    margin-top:-7rem;
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
  h1{
    margin-top: -4rem;
  }
  h3{
    margin-top: 1rem;
  }
  h4{
    margin-top: 0.5rem;
  }
  p {
    margin-top: 6rem;
  }
`;