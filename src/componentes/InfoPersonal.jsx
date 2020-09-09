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
            <p>Soy desarrollador Frontend de manera autodidacta. Estoy en busca de mi oportunidad laboral en este mundo de la programacion y 
                mi principal objetivo es seguir aprendiendo nuevas tecnologias.</p>
        </ContenedorCarta>
    )
}

const ContenedorEstadisticas = styled.div`
    height: 120px;
    width: 100%;
`

const Estadisticas = () => {
    return (
        <ContenedorEstadisticas>

        </ContenedorEstadisticas>
    )
}

