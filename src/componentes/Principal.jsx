import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled.div`
    height: 100vh;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(44,62,80,1) 50%);
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Titulo = styled.h1`
    color: white;
    font-size: 40px;
`

const ContenedorTexto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const IconoEstilado = styled(FontAwesomeIcon)`
    font-size: 30px;
    color:white;
    cursor: pointer;
`

const Principal = () => {
    return (
        <ContenedorPrincipal id="home">
            <ContenedorTexto
                data-sal="slide-down"
                data-sal-delay="500">
                <Titulo>Hola! Soy Román Mettler.</Titulo>
                <Titulo>Frontend developer jr.</Titulo>
                <Link to="informacion-personal" smooth={true} duration={500} >
                    <IconoEstilado icon={faArrowDown}></IconoEstilado>
                </Link>
            </ContenedorTexto>
        </ContenedorPrincipal>
    )
}

export default Principal
