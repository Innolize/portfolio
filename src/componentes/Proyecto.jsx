import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ContenedorProyecto = styled.div`
    display:flex;
    min-height:180px;
    padding: 10px;
    border: 2px solid #2C3E50;
    margin: 10px;
`

const ContenedorPrevia = styled.div`
    width: 350px;
    position:absolute;
    transition: opacity 0.5s, visibility 0.5s;
    ${(props) => props.hover ? 'opacity:0; visibility: hidden;' : ""}
`

const ContenedorInfo = styled.div`
    width: 350px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const DescripcionUsuario = styled.p`
    text-align: center;
`


const Proyecto = ({ data }) => {
    const [hover, setHover] = useState(false)
    return (
        <ContenedorProyecto
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
        >
            <ContenedorInfo hover={hover}>
                <h3>{data.titulo}</h3>
                <DescripcionUsuario>{data.descripcion}</DescripcionUsuario>
                {data.link && <a href={data.link}>Ir a pagina!</a>}
                <a href="">Codigo</a>
            </ContenedorInfo>
            <ContenedorPrevia hover={hover}>
                <Img fluid={data.imagen.childImageSharp.fluid}></Img>
            </ContenedorPrevia>
        </ContenedorProyecto >
    )
}

export default Proyecto