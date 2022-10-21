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
  color: black;
  background-color: lightblue;
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

export const BtnLinkTwo = styled.a`
  display: none;
  color: black;
  background-color: lightblue;
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
  width: 100%;
  padding: 25px 15px 50px 15px;
  background-color: #c8e8e7;
`;

export const Titulos = styled.div`
  text-align: center;
  margin: 15px 0 30px 0;
  border: 5px solid darkblue;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 5px;
  color: white;
  background-color: #01254f;
  border-radius: 15px;
`;

export const TitleOne = styled.h1`
  @media screen and (max-width: 702px) {
    display: none;
  }
`;

export const TitleTwo = styled.h1`
  display: none;
  @media screen and (max-width: 702px) {
    display: initial;
  }
`;

export const SubtitleOne = styled.h2`
  @media screen and (max-width: 702px) {
    display: none;
  }
`;

export const SubtitleTwo = styled.h2`
  display: none;
  @media screen and (max-width: 702px) {
    display: initial;
  }
`;

export const Consideracoes = styled.div`
  margin-top: 85px;
  margin-bottom: 85px;
`;

export const Ol = styled.ol`
  display: block;
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 0;
  width: fit-content;
`;

export const Li = styled.li`
  padding: 10px;
  border: 2px solid darkblue;
  background-color: white;
  border-radius: 15px;
  margin: 5px;
`;

export const H3 = styled.h3`
  text-align: center;
  margin: 15px 0 30px 0;
  border: 5px solid darkblue;
  width: fit-content;
  margin-bottom: 25px;
  padding: 5px;
  color: white;
  background-color: #01254f;
  border-radius: 15px;
`;

export const Linha = styled.div`
  width: 35%;
  margin: 50px 0 85px 0;
  padding: 2px;
  background-color: #01254f;
  position: relative;
  left: 31.5%;
  right: 31.5%;
`;

export const Objetivos = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media SCREEN and (max-width: 930px){
    flex-direction: column;
    align-items: center;
  }
`;

export const Caixa = styled.div`
  width: 200px;
  background-color: blue;
  border: 2px solid black;
  margin: 10px 100px 0 100px;
  border-radius: 15px;
  height: fit-content;
  color: white;
  padding: 15px;
  @media SCREEN and (max-width: 1231px){
    margin-top: 10px;
    margin-left: 50px;
    margin-right: 50px;
  }
  @media SCREEN and (max-width: 930px){
    width: 300px;
    height: 300px;
  }
  @media SCREEN and (max-width: 450px){
    margin: 0;
  }
  @media SCREEN and (max-width: 340px){
    width: 200px;
    height: fit-content;
  }
`;

export const PlanImg = styled.p`
 width: 100%;
 text-align: center;
 font-size: 5rem;
 margin-top: 10px;
 @media SCREEN and (max-width: 930px){
    margin-top: 50px;
  }
`;

export const Mais = styled.button`
  color: white;
  background-color: #01254f;
  border: 2px solid darkblue;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;
  transition: 0.2s;
  margin: 5px 0 10px 0;
  text-decoration: none;
  &:hover {
    background-color: darkblue;
    cursor: pointer;
  }
  @media SCREEN and (max-width: 930px){
    position: relative;
    top: 50px;
  }
  @media SCREEN and (max-width: 340px){
    top: 20px;
  }
`;

export const MaisModal = styled.button`
  color: white;
  background-color: #01254f;
  border: 2px solid darkblue;
  border-radius: 15px;
  width: fit-content;
  padding: 5px;
  transition: 0.2s;
  margin: 5px 0 10px 0;
  text-decoration: none;
  &:hover {
    background-color: darkblue;
    cursor: pointer;
  }
`;

export const SectionModal = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ImgModal = styled.img`
  width: 450px;
  @media SCREEN and (max-width: 616px){
    width: 300px;
  }
  @media SCREEN and (max-width: 450px){
    width: 230px;
  }
`;

export const DivModal = styled.div`
  padding: 20px;
  width: 450px;
  @media SCREEN and (max-width: 616px){
    width: 300px;
  }
  @media SCREEN and (max-width: 518px) {
    padding: 5px;
    font-size: 0.7rem;
  }
  @media SCREEN and (max-width: 450px){
    width: 230px;
  }
`;

export const PModal = styled.p`
  padding-top: 10px;
  @media SCREEN and (max-width: 518px) {
    padding: 5px;
    font-size: 0.7rem;
  }
`;

export const Footer = styled.footer`
  background-color: #001e40;
  color: white;
  padding: 10px;
`;

export const IconImg = styled.img`
  width: 40px;
  &:hover {
    padding: 2px;
    width: 38px;
    border: 2px solid white;
    margin: 1px;
  }
`;

export const IconImgGit = styled.img`
  width: 40px;
  padding: 7px;
  &:hover {
    border: 2px solid white;
    margin: 1px;
    margin-top: 0;
    padding: 7.2px;
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