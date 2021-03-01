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
    background-color: #2c3e50;
    display:flex;
    align-items: center;
    flex-direction: column;
    color:white;
    padding-top: 100px;
    height: 80vh;
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
                data-sal-delay="1000"
                data-sal-easing="easeInCubic"
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

        </ContenedorContacto>
    )
}



export default Contacto
