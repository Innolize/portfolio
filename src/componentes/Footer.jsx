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
const Link = styled.a`
    color:white;
`

const Footer = () => {
    return (
        <ContenedorFooter>
            <ContenedorIconos>
                <Link href="https://www.linkedin.com/in/roman-mettler-265b45a4/">
                    <IconoEstilado icon={faLinkedin} />
                </Link>
                <Link href="https://github.com/Innolize">
                    <IconoEstilado icon={faGithub} />
                </Link>

            </ContenedorIconos >
            <FinalDePagina>Román Mettler ©2022</FinalDePagina>
        </ContenedorFooter >
    )
}

export default Footer