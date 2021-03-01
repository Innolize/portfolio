import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'


const ContenedorInfoPersonal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 100px;
`

const ContenedorEstadisticas = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0px 40px 0px 40px;
`
const Titulo = styled.h1`
    align-self: center;
`
const Contenido = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
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
        }
      } 
    `)

    const data = query.sobreMiJson

    return (
        <ContenedorInfoPersonal
            id="informacion-personal"
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="easeInCubic"
        >
            <Titulo>Sobre mi</Titulo>
            <Contenido>
                <Carta descripcion={data.descripcion}></Carta>
                <ContenedorEstadisticas>
                    {data.tecnologias.map((x, i) => <Estadistica data={x} key={i} />)}
                </ContenedorEstadisticas>
            </Contenido>
        </ContenedorInfoPersonal>
    )
}

export default InfoPersonal


const ContenedorCarta = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

const Carta = ({ descripcion }) => {
    return (
        <ContenedorCarta>
            <img style={{ height: 200 }} src="https://picsum.photos/600/600" alt="test"></img>
            <p style={{ width: '50%' }}>{descripcion}</p>
        </ContenedorCarta>
    )
}



const BarraEstadistica = styled.div`
    width: 100%;
    height: 40px;
    background-color: gray;
    margin-bottom: 15px;
    display:flex;
`

const Atributo = styled.div`
    width: 20%;
    min-width: 150px;
    height: 100%;
    background-color: black;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
`

const ContenedorPorcentaje = styled.div`
    display:flex;
    width:100%;
`

const BarraLLena = styled.div`
    background-color: #2C3E50;
    height: 100%;
    color:white;
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

