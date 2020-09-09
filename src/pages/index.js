import React from "react"
import styled from 'styled-components'
import Principal from '../componentes/Principal'
import Header from "../componentes/Header"


const Contenedor = styled.div`
  font-family: Kumbh Sans;
`

export default function Home() {
  return (
    <Contenedor >
      <Principal />
      <Header />
    </Contenedor>
  )
}