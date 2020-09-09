import React from 'react'
import styled from 'styled-components'

const ContenedorInfoPersonal = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 30px 0px 30px 0px;
`

const InfoPersonal = () => {
    return (
        <ContenedorInfoPersonal>
            <Carta></Carta>
            <Estadisticas></Estadisticas>
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

const Carta = () => {
    return (
        <ContenedorCarta>
            <img style={{ height: 200 }} src="https://picsum.photos/600/600" alt="test"></img>
            <h3>Mas de mi?</h3>
            <p style={{ width: '50%' }}>Soy desarrollador Frontend de manera autodidacta. Estoy en busca de mi oportunidad laboral en este mundo de la programacion y
                mi principal objetivo es seguir aprendiendo nuevas tecnologias.</p>
        </ContenedorCarta>
    )
}

const ContenedorEstadisticas = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0px 40px 0px 40px;
`

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
    width: 80%;
    background-color: blue;
    height: 100%;
    color:white;
`

const Porcentaje = styled.span`

`

const Estadisticas = () => {
    return (
        <ContenedorEstadisticas>
            <BarraEstadistica>
                <Atributo> Javascript</Atributo>
                <ContenedorPorcentaje>
                    <BarraLLena></BarraLLena>
                    <Porcentaje>80%</Porcentaje>
                </ContenedorPorcentaje>

            </BarraEstadistica>
            <BarraEstadistica>
                <Atributo> CSS</Atributo>
                <ContenedorPorcentaje>
                    <BarraLLena></BarraLLena>
                    <Porcentaje>70%</Porcentaje>
                </ContenedorPorcentaje>

            </BarraEstadistica>
            <BarraEstadistica>
                <Atributo> React</Atributo>
                <ContenedorPorcentaje>
                    <BarraLLena></BarraLLena>
                    <Porcentaje>70%</Porcentaje>
                </ContenedorPorcentaje>

            </BarraEstadistica>

            <BarraEstadistica>
                <Atributo> Restfull API</Atributo>
                <ContenedorPorcentaje>
                    <BarraLLena></BarraLLena>
                    <Porcentaje>80%</Porcentaje>
                </ContenedorPorcentaje>

            </BarraEstadistica>

            <BarraEstadistica>
                <Atributo> Redux</Atributo>
                <ContenedorPorcentaje>
                    <BarraLLena></BarraLLena>
                    <Porcentaje>60%</Porcentaje>
                </ContenedorPorcentaje>

            </BarraEstadistica>
            <BarraEstadistica>
                <Atributo> Cypress</Atributo>
                <ContenedorPorcentaje>
                    <BarraLLena></BarraLLena>
                    <Porcentaje>60%</Porcentaje>
                </ContenedorPorcentaje>

            </BarraEstadistica>
            <BarraEstadistica>
                <Atributo> Firebase</Atributo>
                <ContenedorPorcentaje>
                    <BarraLLena></BarraLLena>
                    <Porcentaje>60%</Porcentaje>
                </ContenedorPorcentaje>

            </BarraEstadistica>
        </ContenedorEstadisticas>
    )
}

