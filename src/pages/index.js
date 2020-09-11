import React from "react"
import styled from 'styled-components'
import Principal from '../componentes/Principal'
import Header from "../componentes/Header"
import InfoPersonal from '../componentes/InfoPersonal'
import Proyectos from '../componentes/Proyectos'
import Contacto from '../componentes/Contacto'

const Contenedor = styled.div`
  font-family: Kumbh Sans;
  scroll-behavior: smooth;
`

export default function Home() {

  return (
    <Contenedor>
      <Principal />
      <Header />
      <InfoPersonal></InfoPersonal>
      <Proyectos></Proyectos>
      <Contacto/>
    </Contenedor>
  )
}