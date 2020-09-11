import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Proyecto from './Proyecto'

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
    flex-wrap: wrap;
    justify-content: center;

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
                    tecnologias_utilizadas
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
        >
            <Titulo>Proyectos</Titulo>
            <ContenedorTituloProyecto>
                <TituloProyecto onClick={mostrarTodos}>
                    <h3>Todos</h3>
                </TituloProyecto>
                <TituloProyecto onClick={() => filtrarProyectos('React')}>
                    <h3>React</h3>
                </TituloProyecto>
                <TituloProyecto onClick={() => filtrarProyectos('Javascript')}>
                    <h3>Javascript</h3>
                </TituloProyecto>
                <TituloProyecto onClick={() => filtrarProyectos('Node')}>
                    <h3>Node.js</h3>
                </TituloProyecto>
            </ContenedorTituloProyecto>
            <ContenedorProyectos>
                {mostrar.map((proyecto, i) => <Proyecto data={proyecto} key={i} />)}
            </ContenedorProyectos>
        </ContenedorPrincipal>
    )
}




export default Proyectos
