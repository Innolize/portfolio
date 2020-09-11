import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Separador = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: #2c3e50;
    z-index: 0;
    transform: skewY(-2deg);
    transform-origin: top left;
  `

const ContenedorContacto = styled.div`
    position:relative;
    height: 100vh;
    background-color: #2c3e50;
    display:flex;
    align-items: center;
    flex-direction: column;
    color:white;
`

const Contenido = styled.div`
    padding-top: 100px;
    width: 50%;
`

const InputChico = styled.input`
    height:40px;
    width:100%;
`

const InputGrande = styled.textarea`
    width:100%;
`

const Contacto = () => {
    return (
        <ContenedorContacto id="contacto">
            <Separador />
            <Contenido
                data-sal="zoom-out"
                data-sal-delay="2000"
            >
                <h1>Contacto</h1>
                <h3>Tenes alguna pregunta o queres contactarte conmigo?</h3>
                <form action="https://getform.io/f/105fb10e-ffa1-496e-b670-f66d7b7b047d" method="POST">
                    <InputChico name="name" placeholder="Nombre"></InputChico>
                    <InputChico name="email" placeholder="Email"></InputChico>
                    <InputGrande name="message" rows="10" placeholder="Tu mensaje"></InputGrande>
                    <button type="submit">Enviar</button>
                </form>
            </Contenido>
            <Footer />
        </ContenedorContacto>
    )
}

const ContenedorFooter = styled.div`
    position: absolute;
    bottom: 0;
    height:120px;
    width: 100%;
    background-color: black;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const IconoEstilado = styled(FontAwesomeIcon)`
    font-size:60px;
    padding:25px 20px 0px 20px;
`
const ContenedorIconos = styled.div`
    display:flex;
`
const FinalDePagina = styled.h5`
    padding-top: 15px;
    margin: 0;
`

const Footer = () => {
    return (
        <ContenedorFooter>
            <ContenedorIconos>
                <IconoEstilado icon={faLinkedin} />
                <IconoEstilado icon={faGithub} />
            </ContenedorIconos>
            <FinalDePagina>Román Mettler ©2020</FinalDePagina>
        </ContenedorFooter>
    )
}

export default Contacto
