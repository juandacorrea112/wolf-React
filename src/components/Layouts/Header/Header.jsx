//se importa lo que ira en el header
import React from 'react'
import { Logotipo } from '../../UI/Logotipo/Logotipo';
import lobito from '../../../Images/lobito.jpg';
import { Navegacion } from '../../UI/NavegacionInicio/Navegacion';


export const Header = () => {
  return (
    <header>
        <Logotipo estilo = "lobitoStyle" recurso={lobito} textoAlternativo="logoEmpresa"/>
        <Navegacion/>
    </header>
  )
}
