import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import { gradientAnimation } from "./gradientEffect";

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

export const Nav = styled.nav`
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
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 4rem;
  height: 100%;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-radius: 10px;

  &:hover {
    color: #808080
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }

  &.active {
    color: black;
    font-size: 17px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center /* Second Nav */ /* margin-right: 24px; */ /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */ @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Logo = styled.img``;
