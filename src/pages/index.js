import React from "react"
import styled from 'styled-components'
import Principal from '../componentes/Principal'
import Header from "../componentes/Header"
import InfoPersonal from '../componentes/InfoPersonal'
import Proyectos from '../componentes/Proyectos'
import Contacto from '../componentes/Contacto'
import Cualidades from '../componentes/Cualidades'
import sal from 'sal.js'


const Contenedor = styled.div`
  font-family: Kumbh Sans;
  scroll-behavior: smooth;
`

export default function Home() {

  //Activa animaciones en toda la app
  sal();

  return (
    <Contenedor>
      <Principal />

      <Header />
      <InfoPersonal />
      <Cualidades></Cualidades>
      <Proyectos></Proyectos>
      <Contacto />
    </Contenedor>
  )
}