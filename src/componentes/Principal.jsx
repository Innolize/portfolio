import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const ContenedorPrincipal = styled.div`
    height: 100vh;
    width: 100%;
    background-color: gray;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Titulo = styled.h1`
    color: white;
    font-size: 40px;
`

const BotonEstilado = styled.div`
    height: 50px;
    width: 200px;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ContenedorTexto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Principal = () => {
    return (
        <ContenedorPrincipal id="home">
            <ContenedorTexto
                data-sal="slide-down"
                data-sal-delay="500">
                <Titulo>Hola! Soy Román Mettler.</Titulo>
                <Titulo>Frontend developer jr.</Titulo>
                <BotonEstilado> a mis proyectos!</BotonEstilado>
            </ContenedorTexto>
        </ContenedorPrincipal>
    )
}

export default Principal
