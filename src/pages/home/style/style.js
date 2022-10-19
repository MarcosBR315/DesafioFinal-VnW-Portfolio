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
  background-color: #001e40;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

// cor 1: #001e40
// cor 2: #000203

export const Title = styled.h1`
  color: white;
  background-color: #01254f;
  border: 4px solid darkblue;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;
  font-size: 1.5rem;
  @media SCREEN and (max-width: 800px){
    display: none;
  }
`;

export const TitleTwo = styled.h1`
  color: white;
  background-color: #01254f;
  border: 4px solid darkblue;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;
  font-size: 1.5rem;
  display: none;
  transition: 0.3s;
  @media SCREEN and (max-width: 800px){
    display: initial;
  }
  @media SCREEN and (max-width: 500px){
    font-size: 1rem;
  }
`;

export const BtnLink = styled.a`
  color: white;
  background-color: #01254f;
  border: 4px solid darkblue;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;
  font-size: 1.3rem;
  transition: 0.2s;
  &:hover {
    background-color: darkblue;
  }
  @media SCREEN and (max-width: 800px){
    display: none;
  }
`;

export const BtnLinkTwo = styled.a`
  display: none;
  color: white;
  background-color: #01254f;
  border: 4px solid darkblue;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;
  font-size: 1.3rem;
  transition: 0.2s;
  &:hover {
    background-color: darkblue;
  }
  @media SCREEN and (max-width: 800px){
    display: initial;
  }
  @media SCREEN and (max-width: 500px){
    font-size: 1rem;
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
  padding-top: 25px;
  @media screen and (max-width: 957px){
    padding: 15px 0 0 0;
  }
`;

export const Subtitle = styled.h1`
  color: white;
  text-align: center;
  background-color: #01254f;
  border: 4px solid darkblue;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;
  font-size: 1.6rem;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
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
    margin-bottom: 10px;
  }
`;

export const Ul = styled.ul`
  text-align: start;
  width: 40%;
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
  background-color: #01254f;
  border: 4px solid darkblue;
  border-radius: 15px;
  list-style: none;
  padding: 10px;
  margin: 5px;
  font-size: 1.3rem;
  text-align: start;

  @media SCREEN and (max-width: 1220px) {
    padding: 5px;
  }
  @media SCREEN and (max-width: 957px) {
    width: 500px;
  }
  @media SCREEN and (max-width: 800px){
    width: 95%;
    font-size: 1rem;
  }
`;

export const LiP = styled.p`
  @media SCREEN and (max-width: 800px){
    margin: 5px;
    font-size: 1rem;
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

export const IconImgGit = styled.img`
  width: 40px;
  padding: 7px;
  transition: 0.2s;
  &:hover {
    border: 2px solid white;
    margin: 1px;
    margin-top: 0;
    padding: 7.2px;
  }
`;

export const UlTwo = styled.ul`
  display: flex;
  list-style: none;
`;

export const LiTwo = styled.li`
  width: fit-content;
`;