import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ContenedorHeader = styled.div`
    height: 60px;
    background-color:black;
    display:flex;
    ${(props) => props.fixed ?
        'position: fixed; top: 0px; width: 100%;' : ''}
`

const Item = styled.a`
    color: white;
    align-self: center;
    padding-left: 30px;
`

const Header = () => {
    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        const onScrollHeight = () => {

            window.scrollY > window.innerHeight ? setFixed(true) : setFixed(false)
        }
        window.addEventListener('scroll', onScrollHeight)


    })
    return (
        <ContenedorHeader fixed={fixed}>
            <Item>Inicio</Item>
            <Item>Sobre mi</Item>
            <Item>Proyectos</Item>
            <Item>Contacto</Item>
        </ContenedorHeader>
    )
}

export default Header
