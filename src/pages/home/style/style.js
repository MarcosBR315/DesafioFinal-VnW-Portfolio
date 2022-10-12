import styled, { createGlobalStyle } from "styled-components";
import FundoEstrelas from "../images/FundoEstrelas.png";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
`;

export const Header = styled.header`
  background-color: #000203;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  background-color: #2c00ff;
  border: 4px solid darkblue;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;

  @media SCREEN and (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const BtnLink = styled.a`
  color: white;
  background-color: #2c00ff;
  border: 4px solid darkblue;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;
  transition: 0.2s;
  &:hover {
    background-color: darkblue;
  }
`;

export const Main = styled.main`
  background-image: url(${FundoEstrelas});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  @media screen and (max-width: 957px){
    padding: 0;
  }
`;

export const Subtitle = styled.h1`
  color: white;
  text-align: center;
  background-color: #2c00ff;
  border: 4px solid white;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5% 10% 5% 10%;
  @media SCREEN and (max-width: 957px) {
    display: block;
    text-align: center;
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 0;
  }
`;

export const Img = styled.img`
  color: white;
  width: 350px;
  border: 3px solid darkblue;
  border-radius: 25px;

  @media SCREEN and (max-width: 1220px) {
    width: 250px;
  }
`;

export const Ul = styled.ul`
  text-align: start;
  @media SCREEN and (max-width: 957px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #001e40;
    padding-bottom: 20px;
  }
`;

export const Li = styled.li`
  color: white;
  background-color: #2c00ff;
  border: 4px solid darkblue;
  border-radius: 15px;
  list-style: none;
  padding: 1% 2% 1% 2%;
  margin: 5px;
  font-size: 1.3rem;
  text-align: start;

  @media SCREEN and (max-width: 1220px) {
    padding: 5px;
  }
  @media SCREEN and (max-width: 957px) {
    width: 500px;
  }
`;

export const Footer = styled.footer`
  background-color: #001e40;
  color: white;
  padding: 10px;
`;

export const IconImg = styled.img`
  width: 40px;
  transition: 0.2s;
  &:hover {
    width: 38px;
    border: 2px solid white;
    margin: 1px;
  }
`;

export const UlTwo = styled.ul`
  display: flex;
  list-style: none;
`;

export const LiTwo = styled.li`
  width: fit-content;
`;