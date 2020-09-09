import React from "react"
import styled from 'styled-components'
import Principal from '../componentes/Principal'
import Header from "../componentes/Header"
import InfoPersonal from '../componentes/InfoPersonal'

const Contenedor = styled.div`
  font-family: Kumbh Sans;
`

export default function Home() {

  return (
    <Contenedor>
      <Principal />
      <Header />
      <InfoPersonal></InfoPersonal>
    </Contenedor>
  )
}