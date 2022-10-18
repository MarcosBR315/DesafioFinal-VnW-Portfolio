import React from 'react';
import * as S from './style/style.js';
import { Link } from 'react-router-dom';
import  whiteInstagram from './images/whiteInstagram.png';
import whiteLinkedin from './images/whiteLinkedin.png';
import iconegithub from './images/iconegithub.png';

export default function DesenvolvimentoSus() {
    return (
        <>
            <S.GlobalStyle />
            <S.Header>
                <Link to="/">
                    <S.BtnLink>Página principal</S.BtnLink>
                </Link>
            </S.Header>
            <S.Main>
                <h1>Quais são os meus objetivos de melhora para a minha cidade?</h1>
                <section>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </section>
            </S.Main>
            <S.Footer>
                <p>Desenvolvido por Marcos Paulo Oliveira Pontes</p>
                <nav>
                    <S.UlTwo>
                        <S.LiTwo><a href="https://www.instagram.com/marcospontes05/?next=%2F" rel="noreferrer" target="_blank" ><S.IconImg src={whiteInstagram} alt="Instagram" /></a></S.LiTwo>
                        <S.LiTwo><a href="https://www.linkedin.com/in/marcos-paulo-o-pontes-355059214/" rel="noreferrer" target="_blank"><S.IconImg src={whiteLinkedin} alt="LinkedIn" /></a></S.LiTwo>
                        <S.LiTwo><a href="https://www.linkedin.com/in/marcos-paulo-o-pontes-355059214/" rel="noreferrer" target="_blank"><S.IconImgGit src={iconegithub} alt="GitHub" /></a></S.LiTwo>
                    </S.UlTwo>
                </nav>
            </S.Footer>
        </>
    )
}