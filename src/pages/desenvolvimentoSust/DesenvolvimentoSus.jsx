import React, { useEffect, useState } from 'react';
import * as S from './style/style.js';
import { Link } from 'react-router-dom';
import Modal from "react-modal";

//Imagens
import whiteInstagram from './images/whiteInstagram.png';
import whiteLinkedin from './images/whiteLinkedin.png';
import iconegithub from './images/iconegithub.png';

export default function DesenvolvimentoSus() {

    //Trocar nome

    useEffect(() => {
        document.title = "Objetivo Sustentável";
    }, []);

    //Modal

    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: 'transparent'
        },
      };

    function closeModal() {
        setIsOpen(false);
    };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        
      }

    //Fim Modal


    return (
        <>
            <S.GlobalStyle />
            <S.Header>
                <Link to="/">
                    <S.BtnLink>Página principal</S.BtnLink>
                </Link>
            </S.Header>
            <S.Main>
                <S.Titulos>
                    <h1>Meus objetivos de Desenvolvimento Sustentável</h1>
                    <h2>Riacho Fundo II (DF)</h2>
                </S.Titulos>
                <S.Consideracoes>
                    <S.H3>Por que escolhi estes 5 temas?</S.H3>
                    <S.Ol>
                        <li>Moro na cidade há 5 anos</li>
                        <li>Foram construídas muitas casas e poucos locais públicos (hospitais, escolas, etc.).</li>
                        <li>Em muitos casos você precisa sair da cidade para ter acesso ao colégio.</li>
                        <li>Hospitais, bancos, postos de gasolina dentre muitos outros não existem aqui.</li>
                    </S.Ol>
                </S.Consideracoes>
                <S.Linha />
                <S.Objetivos>
                    <S.Caixa>
                        <p>1 - Saúde</p>
                        <S.PlanImg>💊</S.PlanImg>
                        <S.Mais onClick={() => openModal()}>Saiba mais</S.Mais>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="1 - Saúde"
                        >
                            <S.Mais onClick={closeModal}>Fechar</S.Mais>

                        </Modal>
                    </S.Caixa>
                    <S.Caixa>
                        <p>2 - Educação</p>
                        <S.PlanImg>✏️</S.PlanImg>
                        <S.Mais onClick={() => openModal()}>Saiba mais</S.Mais>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="2 - Educação"
                        >
                            <S.Mais onClick={closeModal}>Fechar</S.Mais>

                        </Modal>
                    </S.Caixa>
                    <S.Caixa>
                        <p>3 - Construção de praças públicas</p>
                        <S.PlanImg>⛲</S.PlanImg>
                        <S.Mais onClick={() => openModal()}>Saiba mais</S.Mais>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="3 - Praças"
                        >
                            <S.Mais onClick={closeModal}>Fechar</S.Mais>

                        </Modal>
                    </S.Caixa>
                    <S.Caixa>
                        <p>4 - Construção de postos de gasolina</p>
                        <S.PlanImg>⛽</S.PlanImg>
                        <S.Mais onClick={() => openModal()}>Saiba mais</S.Mais>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="4 - Gasolina"
                        >
                            <S.Mais onClick={closeModal}>Fechar</S.Mais>

                        </Modal>
                    </S.Caixa>
                    <S.Caixa>
                        <p>5 - Entretenimento</p>
                        <S.PlanImg>🎭</S.PlanImg>
                        <S.Mais onClick={() => openModal()}>Saiba mais</S.Mais>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="5 - Entretenimento"
                        >
                            <S.Mais onClick={closeModal}>Fechar</S.Mais>

                        </Modal>
                    </S.Caixa>
                </S.Objetivos>
            </S.Main>
            <S.Footer>
                <p>Desenvolvido por Marcos Paulo Oliveira Pontes</p>
                <nav>
                    <S.UlTwo>
                        <S.LiTwo><a href="https://www.instagram.com/marcospontes05/?next=%2F" rel="noreferrer" target="_blank" ><S.IconImg src={whiteInstagram} alt="Instagram" /></a></S.LiTwo>
                        <S.LiTwo><a href="https://www.linkedin.com/in/marcos-paulo-o-pontes-355059214/" rel="noreferrer" target="_blank"><S.IconImg src={whiteLinkedin} alt="LinkedIn" /></a></S.LiTwo>
                        <S.LiTwo><a href="https://github.com/MarcosBR315" rel="noreferrer" target="_blank"><S.IconImgGit src={iconegithub} alt="GitHub" /></a></S.LiTwo>
                    </S.UlTwo>
                </nav>
            </S.Footer>
        </>
    )
}