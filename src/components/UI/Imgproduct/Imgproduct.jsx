import React from 'react'

export const Imgproduct = ({lobonieve,direccion, textoAlternativo}) => {
  return (
    <img className= {lobonieve} src={direccion} alt={textoAlternativo} />
  )
}
