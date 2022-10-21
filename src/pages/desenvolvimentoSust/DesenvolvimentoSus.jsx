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
                            <S.MaisModal onClick={closeModal}>Fechar</S.MaisModal>
                            <S.SectionModal>
                                <S.ImgModal src={postosaude} alt="Posto de Saúde" />
                                <S.DivModal>
                                    <h2>O que fazer?</h2>
                                    <S.PModal>
                                        As Unidades Básicas de Saúde, também conhecidas como UPAs e postos de saúde,
                                        são escassos no Riacho Fundo II, há entre uma
                                        ou duas delas em distâncias muito grandes. Faltam muitos recursos como vacinas
                                        e remédios. Para resolver esta situação, podem ser realizadas várias ações
                                        por meio da população como abaixo-assinados.
                                    </S.PModal>
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
                            <S.MaisModal onClick={closeModal}>Fechar</S.MaisModal>
                            <S.SectionModal>
                                <S.ImgModal src={escola} alt="Escola" />
                                <S.DivModal>
                                    <h2>O que fazer?</h2>
                                    <S.PModal>
                                        Escolas de todos os níveis (ensino básico, médio e superior) estão em falta
                                        no Riacho Fundo II, muitos moradores matriculam-se em escolas e universidades
                                        em cidades vizinhas para receberem o acesso ao estudo. Muito se pode fazer
                                        para resolver esta situação, um trabalho bem feito do governo pode resolver
                                        este problema recorrente em pouco tempo se bem planejado. 
                                    </S.PModal>
                                </S.DivModal>
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
                            <S.MaisModal onClick={closeModal}>Fechar</S.MaisModal>
                            <S.SectionModal>
                                <S.ImgModal src={pracapublica} alt="Praça Pública" />
                                <S.DivModal>
                                    <h2>O que fazer?</h2>
                                    <S.PModal>
                                        Um problema recorrente de todo o Riacho Fundo II é onde muitos espaços
                                        públicos estão vazios, sem nenhuma plantação somente mato. Algo que
                                        ajudaria bastante no entrosamento social seriam as praças públicas
                                        com bancos e equipamentos para exercícios físicos. Para isso, o governo
                                        deveria analisar estes espaços disponíveis para construir praças novas.
                                    </S.PModal>
                                </S.DivModal>
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
                            <S.MaisModal onClick={closeModal}>Fechar</S.MaisModal>
                            <S.SectionModal>
                                <S.ImgModal src={postogasolina} alt="Posto de Gasolina Ipiranga" />
                                <S.DivModal>
                                    <h2>O que fazer?</h2>
                                    <S.PModal>
                                        Para abastecer um carro, o cidadão residente do Riacho Fundo II
                                        deve sair da cidade para encher o tanque de seu automóvel. Há
                                        relatos diários de pessoas que acabam ficando sem combustível
                                        e precisam buscar a pé combustível para seu veículo. Uma boa
                                        forma de resolver isso seria a facilitação de abertura de postos de
                                        gasolina para empresas privadas. 
                                    </S.PModal>
                                </S.DivModal>
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
                            <S.MaisModal onClick={closeModal}>Fechar</S.MaisModal>
                            <S.SectionModal>
                                <S.ImgModal src={shopping} alt="Shopping Center" />
                                <S.DivModal>
                                    <h2>O que fazer?</h2>
                                    <S.PModal>
                                        O Riacho Fundo II pode ser considerado uma cidade residencial, muitas casas
                                        com pouco comércio além da falta de serviços essenciais como bancos e shopping
                                        centers. Para atrair investimentos para a cidade, o governo deveria facilitar
                                        a compra de grandes espaços para construção de espaços para entretenimento.
                                    </S.PModal>
                                </S.DivModal>
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