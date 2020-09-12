import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const ContenedorFooter = styled.div`
    height:120px;
    width: 100%;
    background-color: black;
    display:flex;
    flex-direction: column;
    align-items: center;
    color:white;
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

export default Footer