import React from 'react'

import styled from 'styled-components'

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
            <Contenido>
                <h1>Contacto</h1>
                <h3>Tenes alguna pregunta o queres contactarte conmigo?</h3>

                <InputChico placeholder="Nombre"></InputChico>
                <InputChico placeholder="Email"></InputChico>
                <InputGrande rows="10" placeholder="Tu mensaje"></InputGrande>
            </Contenido>
            <Footer />
        </ContenedorContacto>
    )
}

const ContenedorFooter = styled.div`
    height:120px;
    width: 100%;
    background-color: black;
`

const Footer = () => {
    return (
        <ContenedorFooter>asd</ContenedorFooter>
    )
}

export default Contacto
