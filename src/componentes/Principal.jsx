import React from 'react'
import styled from 'styled-components'

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
`

const Principal = () => {
    return (
        <ContenedorPrincipal>
            <Titulo>Hola! Soy Román Mettler.</Titulo>
            <Titulo>Frontend developer</Titulo>
            <BotonEstilado> a mis proyectos!</BotonEstilado>
        </ContenedorPrincipal>
    )
}

export default Principal
