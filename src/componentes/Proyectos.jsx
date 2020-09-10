import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ContenedorPrincipal = styled.div`
    display:flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
`

const Titulo = styled.h1`
`

const ContenedorProyectos = styled.div`
    display:flex;

`

const TituloProyecto = styled.div`
    padding: 0px 40px 0px 40px;
`

const ContenedorTituloProyecto = styled.div`
    display:flex;
    justify-content: space-between;
`

const Proyectos = () => {

    const query = useStaticQuery(graphql`
        {
            allProyectosJson {
                edges {
                  node {
                    descripcion
                    Tecnologias_utilizadas
                    link
                    titulo
                    imagen {
                      publicURL
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
        }
    `)

    const data = query.allProyectosJson.edges
    console.log(data)

    return (
        <ContenedorPrincipal>
            <Titulo>Proyectos</Titulo>
            <ContenedorTituloProyecto>
                <TituloProyecto>
                    <h3>Todos</h3>
                </TituloProyecto>
                <TituloProyecto>
                    <h3>React</h3>
                </TituloProyecto>
                <TituloProyecto>
                    <h3>Javascript</h3>
                </TituloProyecto>
                <TituloProyecto>
                    <h3>Node js</h3>
                </TituloProyecto>
            </ContenedorTituloProyecto>
            <ContenedorProyectos>
                {data.map(({ node: proyecto }, i) => <Proyecto data={proyecto} key={i} />)}
            </ContenedorProyectos>
        </ContenedorPrincipal>
    )
}

const ContenedorProyecto = styled.div`
    display:flex;
    flex-direction: column;
`

const ContenedorPrevia = styled.div`
    width: 350px;
    height: 250px;
    position:absolute;
    transition: opacity 0.5s, visibility 0.5s;
    ${(props) => props.hover ? 'opacity:0; visibility: hidden;' : ""}
        
    
`

const ContenedorInfo = styled.div`
    width: 350px;
    height: 250px;
    display:flex;
    flex-direction: column;
    align-items: center;
`


const Proyecto = ({ data }) => {
    // const imagen = data.imagen.childImageSharp.fluid

    const [hover, setHover] = useState(false)
    console.log(hover)
    return (
        <ContenedorProyecto
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
        >
            <ContenedorInfo hover={hover}>
                <h3>{data.titulo}</h3>
                <p>{data.descripcion}</p>
                <a href={data.link}>{data.link}</a>
            </ContenedorInfo>
            <ContenedorPrevia hover={hover}>
                <Img fluid={data.imagen.childImageSharp.fluid}></Img>
            </ContenedorPrevia>
        </ContenedorProyecto >
    )
}


export default Proyectos
