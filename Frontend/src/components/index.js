import React from "react";
import "./style.css";
import styled, { keyframes } from "styled-components";

//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import Login from './Login/login';
//import LoginComponent from './Login/login';
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const HomeComponentContainer = styled.div`
  background: linear-gradient(
    -45deg,
    #ff9147,
    #ff4961,
    #fb62f6,
    #6153de,
    #1cd8d2,
    #ff9147,
    #ff4961,
    #fb62f6,
    #6153de,
    #1cd8d2
  );
  background-size: 300% 300%;
  animation: ${gradientAnimation} 50s ease infinite;
  color: white;
`;

const Heading = styled.h1`
  color: black;
`;

const Home = () => {
  return (
    <HomeComponentContainer>
      <div className="title">
        {" "}
        {/* <img src='ban.jpeg' alt="banner1"/> */}{" "}
        <div className="himg">
          <Heading> TechnoSapiens Fitclub </Heading>{" "}
          <div className="button-container">
            <button className="button" onClick={handleLoginClick}>
              Login{" "}
            </button>{" "}
            <button className="button" onClick={handleSignupClick}>
              SignUp{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </HomeComponentContainer>
  );
};

function handleLoginClick() {
  // Redirect to the login page
  window.location.href = "./login";
}

function handleSignupClick() {
  window.location.href = "./SignupForm";
}

export default Home;
