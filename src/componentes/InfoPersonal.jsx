import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ContenedorInfoPersonal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
`

const ContenedorEstadisticas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 360px;
  padding: 0px 40px 0px 40px;
`
const Titulo = styled.h1`
  align-self: center;
`
const Contenido = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

const TituloEstadisticas = styled.h2`
`

const InfoPersonal = () => {
  const query = useStaticQuery(graphql`
    {
      sobreMiJson {
        descripcion
        tecnologias {
          tecnologia
          confianza
        }
        perfil {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const data = query.sobreMiJson

  return (
    <>
      <ContenedorInfoPersonal
        id="informacion-personal"
        data-sal="slide-right"
        data-sal-duration="1000"
        data-sal-easing="easeInCubic"
      >
        <Titulo>Sobre mi</Titulo>
        <Contenido>
          <Carta data={data}></Carta>
          <ContenedorEstadisticas>
            <TituloEstadisticas>Tecnologías: </TituloEstadisticas>
            {data.tecnologias.map((x, i) => (
              <Estadistica data={x} key={i} />
            ))}
          </ContenedorEstadisticas>
        </Contenido>
      </ContenedorInfoPersonal>
    </>
  )
}

export default InfoPersonal

const ContenedorCarta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 360px;
`
const MiDescripcion = styled.p`
  text-align: center;
  font-size: 18px;
`

const ContenedorImagen = styled.div`
  width: 180px;
  border: 1px solid white;
`

const Carta = ({ data }) => {
  console.log(data)
  return (
    <ContenedorCarta>
      <ContenedorImagen>
        <Img fluid={data.perfil.childImageSharp.fluid}></Img>
      </ContenedorImagen>
      <MiDescripcion>{data.descripcion}</MiDescripcion>
    </ContenedorCarta>
  )
}

const BarraEstadistica = styled.div`
  width: 100%;
  height: 40px;
  background-color: gray;
  margin-bottom: 15px;
  display: flex;
  border: 1px solid white;
`

const Atributo = styled.div`
  width: 20%;
  min-width: 150px;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`

const ContenedorPorcentaje = styled.div`
  display: flex;
  width: 100%;
`

const BarraLLena = styled.div`
  background-color: #2c3e50;
  height: 100%;
  color: white;
  width: ${props => props.width};
`

const Porcentaje = styled.span`
  align-self: center;
  color: white;
`

const Estadistica = ({ data }) => {
  return (
    <BarraEstadistica>
      <Atributo>{data.tecnologia}</Atributo>
      <ContenedorPorcentaje>
        <BarraLLena width={data.confianza}></BarraLLena>
        <Porcentaje>{data.confianza}</Porcentaje>
      </ContenedorPorcentaje>
    </BarraEstadistica>
  )
}
