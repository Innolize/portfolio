import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Proyecto from "./Proyecto"
import { useCallback } from "react"

const ContenedorPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`

const Titulo = styled.h1``

const ContenedorProyectos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const TituloProyecto = styled.div`
    padding: 0px 15px 0px 15px;
    cursor: pointer;
    margin: 0px 15px;
    border: 1px solid gray;
    ${props =>
      props.selected
        ? "color: black; background-color:gray;"
        : "color:white; background: black;"}
        transition: background 0.5s, background-color 0.5s
}
`

const ContenedorTituloProyecto = styled.div`
  display: flex;
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
  const [seleccionado, setSeleccionado] = useState("Todos")
  const mostrarTodos = useCallback(() => {
    setMostrar(data)
    setSeleccionado("Todos")
  }, [data])

  const filtrarProyectos = useCallback(
    string => {
      setMostrar(data.filter(x => x.tecnologias_utilizadas.includes(string)))
      setSeleccionado(string)
    },
    [data]
  )

  return (
    <ContenedorPrincipal
      id="proyectos"
      data-sal="zoom-in"
      data-sal-duration="1000"
      data-sal-easing="easeInCubic"
    >
      <Titulo>Proyectos</Titulo>
      <ContenedorTituloProyecto>
        <TituloProyecto
          selected={seleccionado === "Todos"}
          onClick={() => mostrarTodos()}
        >
          <h2>Todos</h2>
        </TituloProyecto>
        <TituloProyecto
          selected={seleccionado === "React"}
          onClick={() => filtrarProyectos("React")}
        >
          <h2>React</h2>
        </TituloProyecto>
        <TituloProyecto
          selected={seleccionado === "Javascript"}
          onClick={() => filtrarProyectos("Javascript")}
        >
          <h2>Javascript</h2>
        </TituloProyecto>
        <TituloProyecto
          selected={seleccionado === "Node"}
          onClick={() => filtrarProyectos("Node")}
        >
          <h2>Node.js</h2>
        </TituloProyecto>
      </ContenedorTituloProyecto>
      <ContenedorProyectos>
        {mostrar.map((proyecto, i) => (
          <Proyecto data={proyecto} key={i} />
        ))}
      </ContenedorProyectos>
    </ContenedorPrincipal>
  )
}

export default Proyectos
