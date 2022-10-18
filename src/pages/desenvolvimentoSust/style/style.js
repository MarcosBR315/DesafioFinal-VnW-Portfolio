import styled, { createGlobalStyle } from "styled-components";

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

export const BtnLink = styled.p`
  color: white;
  background-color: #01254f;
  border: 4px solid darkblue;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;
  font-size: 1.3rem;
  transition: 0.2s;
  text-decoration: none;
  &:hover {
    background-color: darkblue;
  }
  @media SCREEN and (max-width: 800px){
    display: none;
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 50px;
  padding-top: 25px;
  @media screen and (max-width: 957px){
    padding: 15px 0 0 0;
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
  width: 25px;
  transition: 0.2s;
  &:hover {
    width: 38px;
    border: 2px solid white;
    margin: 1px;
  }
`;

export const UlTwo = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const LiTwo = styled.li`
  width: fit-content;
`;