import React from 'react'
import styled from 'styled-components'

const ContenedorHeader = styled.div`
    height: 60px;
    background-color:black;
    display:flex;
`

const Item = styled.a`
    color: white;
    align-self: center;
    padding-left: 30px;
`

const Header = () => {
    return (
        <ContenedorHeader>
            <Item>Inicio</Item>
            <Item>Sobre mi</Item>
            <Item>Proyectos</Item>
            <Item>Contacto</Item>
        </ContenedorHeader>
    )
}

export default Header
