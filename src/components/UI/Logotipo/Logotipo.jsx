//aqui la imagen
import React from 'react'

export const Logotipo = ({recurso, textoAlternativo, estilo}) => {
  return (
    <img className={estilo} src={recurso} alt={textoAlternativo}/>
  );
}
