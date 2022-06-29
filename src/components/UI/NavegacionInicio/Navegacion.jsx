//se importa lo que llevara la navegacion
import React from 'react'
import { Ancla } from '../Anclas/Ancla';
import lobito from '../../../Images/lobito.jpg';
import { Logotipo } from '../Logotipo/Logotipo';

export const Navegacion = () => {
  return (
    <nav className='navEnlace'>
        <Logotipo estilo = "options" recurso = {lobito} textoAlternativo = "lobo" />
        <Ancla estilo="estilo" textoAncla = "HOME"/>
        <Ancla estilo=" estilo" textoAncla = "  NEWS PRODUCTS"/>
        <Ancla estilo="estilo" textoAncla = "  CONTACTS"/>
    </nav>
  )
}
