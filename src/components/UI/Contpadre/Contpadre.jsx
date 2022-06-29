import React from 'react'
import { Imgproduct } from '../Imgproduct/Imgproduct'
import lobito2 from '../../../Images/lobonieve.jpg'
import { Text } from '../Text/Text'

export const Contpadre = () => {
  return (
    <div className='contImgAndText'>
        <Text Parrafo = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsam nobis eligendi deleniti perferendis cumque, expedita sit dolore cupiditate, asperiores voluptatum vitae sunt labore repellendus laboriosam eius qui quibusdam? Necessitatibus? Quasi voluptaseos consequuntur rerum? Assumenda, quaerat voluptas a dolore ex nulla quasi repellat debitis,odio autem maxime eum optio numquam quibusdam!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima porro explicabo eos vero, commodi nemo excepturi sunt blanditiis quam ducimus labore asperiores eius atque natus qui, ipsum quas consectetur iste."/>
        <Imgproduct lobonieve = "loboNieve" direccion={lobito2}/>
    </div>
  ) 
}