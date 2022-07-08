import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ContenedorProyecto = styled.div`
    display:flex;
    width: 350px;
    min-height:180px;
    padding: 10px;    
    margin: 10px;
`
// border: 2px solid #2C3E50;

const ContenedorPrevia = styled.div`
    width: 360px;
    position:absolute;
    transition: opacity 0.5s, visibility 0.5s;
    background-color: black;
    ${(props) => props.hover ? 'opacity:0; visibility: hidden;' : ""}
`

const ContenedorInfo = styled.div`
    width:360px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const DescripcionUsuario = styled.p`
    text-align: center;
    font-size: 16px;
`
const TituloProyecto = styled.h4`
    margin: 10px
`

const Proyecto = ({ data }) => {
    const [hover, setHover] = useState(false)
    return (
        <ContenedorProyecto
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
        >
            <ContenedorInfo hover={hover}>
                <TituloProyecto >{data.titulo}</TituloProyecto>
                <DescripcionUsuario>{data.descripcion}</DescripcionUsuario>
                {data.link && <a href={data.link}>Ir a pagina!</a>}
                <a href={data.codigo}>Codigo</a>
            </ContenedorInfo>
            <ContenedorPrevia hover={hover}>
                <Img fluid={data.imagen.childImageSharp.fluid}></Img>
            </ContenedorPrevia>
        </ContenedorProyecto >
    )
}

export default Proyecto