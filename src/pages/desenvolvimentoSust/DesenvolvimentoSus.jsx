import React, { useEffect, useState } from 'react';
import * as S from './style/style.js';
import { Link } from 'react-router-dom';
import Modal from "react-modal";

//Imagens
import whiteInstagram from './images/whiteInstagram.png';
import whiteLinkedin from './images/whiteLinkedin.png';
import iconegithub from './images/iconegithub.png';
import postosaude from './images/postosaude.png';
import escola from './images/escola.png';
import pracapublica from './images/pracapublica.png';
import postogasolina from './images/postogasolina.png';
import shopping from './images/shopping.png';


//Início
export default function DesenvolvimentoSus() {

    //Trocar nome

    useEffect(() => {
        document.title = "Objetivo Sustentável";
    }, []);

    //Modal

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [modalIsOpen3, setIsOpen3] = useState(false);
    const [modalIsOpen4, setIsOpen4] = useState(false);
    const [modalIsOpen5, setIsOpen5] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            border: '2px solid darkblue',
            borderRadius: '15px',
            opacity: '10',
            width: '85%'
        },
    };

    function closeModal() {
        setIsOpen(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);
    };

    function openModal() {
        setIsOpen(true);
    };

    function openModal2() {
        setIsOpen2(true);
    }

    function openModal3() {
        setIsOpen3(true);
    }

    function openModal4() {
        setIsOpen4(true);
    }

    function openModal5() {
        setIsOpen5(true);
    }


    function afterOpenModal() {

    }

    //Fim Modal


    return (
        <>
            <S.GlobalStyle />
            <S.Header>
                <Link to="/">
                    <S.BtnLink>Página Inicial</S.BtnLink>
                    <S.BtnLinkTwo>Pg. Inicial</S.BtnLinkTwo>
                </Link>
            </S.Header>
            <S.Main>
                <S.Titulos>
                    <S.TitleOne>Meus objetivos de Desenvolvimento Sustentável</S.TitleOne>
                    <S.TitleTwo>Objetivos de D. Sustentável</S.TitleTwo>
                    <S.SubtitleOne>Riacho Fundo II (DF)</S.SubtitleOne>
                    <S.SubtitleTwo><p>Riacho Fundo II</p></S.SubtitleTwo>
                    <S.SubtitleTwo>(DF)</S.SubtitleTwo>
                </S.Titulos>
                <S.Consideracoes>
                    <S.H3>Por que escolhi estes 5 temas?</S.H3>
                    <S.Ol>
                        <S.Li>Moro na cidade há 5 anos</S.Li>
                        <S.Li>Foram construídas muitas casas e poucos locais públicos (hospitais, escolas, etc.).</S.Li>
                        <S.Li>Em muitos casos você precisa sair da cidade para ter acesso ao colégio.</S.Li>
                        <S.Li>Hospitais, bancos, postos de gasolina dentre muitos outros não existem aqui.</S.Li>
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
                            <S.SectionModal>
                                <S.ImgModal src={postosaude} alt="Posto de Saúde" />
                                <S.DivModal>
                                    <h2>O que fazer?</h2>
                                    <p>rfrfrfrfrfrfrfrfrfrfrfrfrfrfrfrfrfrfrfdgdfgeddvservsgbghvstvhtrvh</p>
                                </S.DivModal>
                            </S.SectionModal>
                        </Modal>
                    </S.Caixa>
                    <S.Caixa>
                        <p>2 - Educação</p>
                        <S.PlanImg>✏️</S.PlanImg>
                        <S.Mais onClick={() => openModal2()}>Saiba mais</S.Mais>
                        <Modal
                            isOpen={modalIsOpen2}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="2 - Educação"
                        >
                            <S.Mais onClick={closeModal}>Fechar</S.Mais>
                            <S.SectionModal>
                                <S.ImgModal src={escola} alt="Escola" />
                            </S.SectionModal>
                        </Modal>
                    </S.Caixa>
                    <S.Caixa>
                        <p>3 - Construção de praças públicas</p>
                        <S.PlanImg>⛲</S.PlanImg>
                        <S.Mais onClick={() => openModal3()}>Saiba mais</S.Mais>   
                        <Modal
                            isOpen={modalIsOpen3}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="3 - Locais Públicos"
                        >
                            <S.Mais onClick={closeModal}>Fechar</S.Mais>
                            <S.SectionModal>
                                <S.ImgModal src={pracapublica} alt="Praça Pública" />
                            </S.SectionModal>
                        </Modal>
                    </S.Caixa>
                    <S.Caixa>
                        <p>4 - Construção de postos de gasolina</p>
                        <S.PlanImg>⛽</S.PlanImg>
                        <S.Mais onClick={() => openModal4()}>Saiba mais</S.Mais>
                        <Modal
                            isOpen={modalIsOpen4}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="4 - Postos de Gasolina"
                        >
                            <S.Mais onClick={closeModal}>Fechar</S.Mais>
                            <S.SectionModal>
                                <S.ImgModal src={postogasolina} alt="Posto de Gasolina Ipiranga" />
                            </S.SectionModal>
                        </Modal>
                    </S.Caixa>
                    <S.Caixa>
                        <p>5 - Entretenimento</p>
                        <S.PlanImg>🎭</S.PlanImg>
                        <S.Mais onClick={() => openModal5()}>Saiba mais</S.Mais>
                        <Modal
                            isOpen={modalIsOpen5}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="5 - Entretenimento"
                        >
                            <S.Mais onClick={closeModal}>Fechar</S.Mais>
                            <S.SectionModal>
                                <S.ImgModal src={shopping} alt="Shopping Center" />
                            </S.SectionModal>
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