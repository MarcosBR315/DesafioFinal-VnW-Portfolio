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
  padding: 25px 15px 50px 15px;
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

export const Consideracoes = styled.div`
  margin-top: 85px;
  margin-bottom: 85px;
`;

export const Ol = styled.ol`
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
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
`;

export const PlanImg = styled.p`
 width: 100%;
 text-align: center;
 font-size: 5rem;
 margin-top: 10px;
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