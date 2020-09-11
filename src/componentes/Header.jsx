import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from 'react-scroll'

const ContenedorHeader = styled.div`
    height: 60px;
    background-color:black;
    display:flex;
    ${(props) => props.fixed ?
        'position: fixed; top: 0px; width: 100%; z-index: 1' : ''}
`

const Item = styled(Link)`
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
            <Item to="home" smooth={true} duration={500}>Inicio</Item>
            <Item to="informacion-personal" smooth={true} duration={500} >Sobre mi</Item>
            <Item to="proyectos" smooth={true} duration={500} >Proyectos</Item>
            <Item to="contacto" smooth={true} duration={500} >Contacto</Item>
        </ContenedorHeader>
    )
}

export default Header
