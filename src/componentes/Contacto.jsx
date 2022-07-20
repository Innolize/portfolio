import React from 'react'
import styled from 'styled-components'

const ContenedorContacto = styled.div`
    position:relative;
    display:flex;
    align-items: center;
    flex-direction: column;
    color:white;
    padding-top: 100px;
    height: 80vh;
    background: linear-gradient(0deg, rgba(44,62,80,1) 50%, rgba(0,0,0,1) 100%);
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
            <Contenido
                data-sal="zoom-out"
                data-sal-delay="1000"
                data-sal-easing="easeInCubic"
            >
                <h1>Contacto</h1>
                <h3>Tenés alguna pregunta o querés contactarte conmigo?</h3>
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
