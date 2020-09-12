import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faPencilAlt, faVials } from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
`

const ContenedorCualidades = styled.div`
    display:flex;
    justify-content: space-around;
    
`
const Titulo = styled.h1`
    align-self: center;
`

const Cualidades = () => {
    return (
        <ContenedorPrincipal id="cualidades">
            <Titulo>Mas de mi?</Titulo>
            <ContenedorCualidades>
                <Cualidad icon={faPencilAlt} titulo="Autodidacta" descripcion={"Soy autodidacta! Todo lo aprendido fue por cuenta propia mirando videos y leyendo documentacion"} />
                <Cualidad icon={faLanguage} titulo="Ingles" descripcion={"Mi capacidad de lectura y comprension de ingles es intermedio-avanzado. La mayoria del material para aprender y la documentacion esta en ingles, cosa que no es problema"} />
                <Cualidad icon={faVials} titulo="Testing" descripcion={"Conozco las bases de testo ya que en algunos proyectos esta implementado testeo con Cypress y Jest"} />
            </ContenedorCualidades>|
        </ContenedorPrincipal>
    )
}

const ContenedorCualidad = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: solid #808080;
    padding: 20px;
`

const ContenedorIcono = styled.div`
    width:200px;
`

const IconoEstilado = styled(FontAwesomeIcon)`
    font-size:150px;
    color: #2C3E50;
    align-self: center;
    padding: 20px 0px 20px 0px;
`

const Descripcion = styled.p`

`

const TituloDescripcion = styled.h3`
    align-self: center;
`

const Cualidad = ({ icon, titulo = "Titulo", descripcion = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quas harum exercitationem eius quaerat nihil animi reiciendis et possimus optio. Numquam reiciendis saepe doloribus ducimus exercitationem? Doloribus incidunt perspiciatis possimus." }) => {
    return (
        <ContenedorCualidad>
            <IconoEstilado icon={icon} />
            <TituloDescripcion>
                {titulo}
            </TituloDescripcion>
            <Descripcion>
                {descripcion}
            </Descripcion>
        </ContenedorCualidad>
    )
}



export default Cualidades
