import React, { Fragment, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import * as S from "./style/style";
import { GlobalStyle } from "./style/style";
import Eu from "./images/Eu.png";
import whiteInstragram from './images/whiteInstagram.png';
import whiteLinkedin from './images/whiteLinkedin.png';

export default function Home() {

  const [info] = useState([{
    gosto: "Programar não é apenas um hobby",
    idade: "Idade: 17 anos (2022)",
    conhecimentos: "Conhecimentos: Front-End (cursando), Back-End (cursando, Java) e Inglês (cursando)",
    hobby: "O que me deixa feliz além de programar? Contrabaixo, Guitarra e Rock 'n Roll"
  }]);

  useEffect(() => {
    document.title = "Sobre Mim"
  }, [])

  return (
    <Fragment>
      <GlobalStyle />
      <S.Header>
        <S.Title>Portfólio</S.Title>
        <Link to="/DesenvolvimentoSus"><S.BtnLink>Página de Desenvolvimento Sustentável</S.BtnLink></Link>
      </S.Header>
      <S.Main>
        <S.Subtitle>Marcos Paulo Oliveira Pontes</S.Subtitle>
        <S.Section>
          <S.Img src={Eu} alt="Marcos Paulo" />
          {info.map((item) => (
            <S.Ul>
              <S.Li>{item.gosto}</S.Li>
              <S.Li>{item.idade}</S.Li>
              <S.Li>{item.conhecimentos}</S.Li>
              <S.Li>{item.hobby}</S.Li>
            </S.Ul>
          ))}
        </S.Section>
      </S.Main>
      <S.Footer>
        <p>Desenvolvido por Marcos Paulo Oliveira Pontes</p>
        <nav>
          <S.UlTwo>
            <S.LiTwo><a href="https://www.instagram.com/marcospontes05/?next=%2F" target="_blank" ><S.IconImg src={whiteInstragram} alt="Instagram" /></a></S.LiTwo>
            <S.LiTwo><a href=""><S.IconImg src={whiteLinkedin} alt="LinkedIn" /></a></S.LiTwo>
          </S.UlTwo>
        </nav>
      </S.Footer>
    </Fragment>
  );
}
