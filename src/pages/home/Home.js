import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style/style";
import { GlobalStyle } from "./style/style";
import Eu from "./images/Eu.png";
import whiteInstragram from './images/whiteInstagram.png';
import whiteLinkedin from './images/whiteLinkedin.png';

export default function Home() {

  const [info] = useState([{
    gosto: "Programar não é apenas um hobby",
    idade: "17 anos (em 2022)",
    conhecimentos: ["Front-End (ReactJS, HTML, CSS, JavaScript)", "Back-End (Java)", "Inglês (Intermediário)"],
    hobby: "Contrabaixo, Guitarra e Rock 'n Roll"
  }]);

  useEffect(() => {
    document.title = "Sobre Mim"
  }, [])

  return (
    <Fragment>
      <GlobalStyle />
      <S.Header>
        <S.Title>Marcos Paulo Oliveira Pontes</S.Title>
        <S.TitleTwo>Marcos Paulo O. Pontes</S.TitleTwo>
        <Link to="/DesenvolvimentoSus">
          <S.BtnLink>Página de Desenvolvimento Sustentável</S.BtnLink>
          <S.BtnLinkTwo>Des. Sustentável</S.BtnLinkTwo>
        </Link>
      </S.Header>
      <S.Main>
        <S.Subtitle>Portfólio</S.Subtitle>
        <S.Section>
          <S.Img src={Eu} alt="Marcos Paulo" />
          {info.map((item) => (
            <S.Ul>
              <S.Li><strong>{item.gosto}</strong></S.Li>
              <S.Li><strong>Idade: </strong>{item.idade}</S.Li>
              <S.Li>
                <S.LiP><strong>Conhecimentos em curso: </strong></S.LiP>
                <S.LiP>{item.conhecimentos[0]}</S.LiP>
                <S.LiP>{item.conhecimentos[1]}</S.LiP>
                <S.LiP>{item.conhecimentos[2]}</S.LiP>
                <S.LiP>{item.conhecimentos[3]}</S.LiP>
              </S.Li>
              <S.Li><p><strong>O que me deixa feliz além de programar? </strong></p>{item.hobby}</S.Li>
            </S.Ul>
          ))}
        </S.Section>
      </S.Main>
      <S.Footer>
        <p>Desenvolvido por Marcos Paulo Oliveira Pontes</p>
        <nav>
          <S.UlTwo>
            <S.LiTwo><a href="https://www.instagram.com/marcospontes05/?next=%2F" rel="noreferrer" target="_blank" ><S.IconImg src={whiteInstragram} alt="Instagram" /></a></S.LiTwo>
            <S.LiTwo><a href="https://www.linkedin.com/in/marcos-paulo-o-pontes-355059214/" rel="noreferrer" target="_blank"><S.IconImg src={whiteLinkedin} alt="LinkedIn" /></a></S.LiTwo>
          </S.UlTwo>
        </nav>
      </S.Footer>
    </Fragment>
  );
}
