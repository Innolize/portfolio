import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Proyecto from './Proyecto'

const ContenedorPrincipal = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
`

const Titulo = styled.h1`
`

const ContenedorProyectos = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;

`

const TituloProyecto = styled.div`
    padding: 0px 40px 0px 40px;
    cursor: pointer;
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
                    tecnologias_utilizadas
                    link
                    titulo
                    codigo
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

    const respuestaQuery = query.allProyectosJson.edges
    const data = respuestaQuery.map(respuesta => respuesta.node)

    const [mostrar, setMostrar] = useState(data)

    const mostrarTodos = () => {
        setMostrar(data)
    }

    const filtrarProyectos = (string) => {
        setMostrar(data.filter(x => x.tecnologias_utilizadas.includes(string)))
    }

    return (
        <ContenedorPrincipal id="proyectos"
            data-sal="zoom-in"
            data-sal-duration="1000"
            data-sal-easing="easeInCubic"
        >
            <Titulo>Proyectos</Titulo>
            <ContenedorTituloProyecto>
                <TituloProyecto onClick={mostrarTodos}>
                    <h2>Todos</h2>
                </TituloProyecto>
                <TituloProyecto onClick={() => filtrarProyectos('React')}>
                    <h2>React</h2>
                </TituloProyecto>
                <TituloProyecto onClick={() => filtrarProyectos('Javascript')}>
                    <h2>Javascript</h2>
                </TituloProyecto>
                <TituloProyecto onClick={() => filtrarProyectos('Node')}>
                    <h2>Node.js</h2>
                </TituloProyecto>
            </ContenedorTituloProyecto>
            <ContenedorProyectos>
                {mostrar.map((proyecto, i) => <Proyecto data={proyecto} key={i} />)}
            </ContenedorProyectos>
        </ContenedorPrincipal>
    )
}




export default Proyectos
