import React from 'react'
import { trabajos } from '../data/trabajos'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>PORTAFOLIO</h1>
    
      {
        trabajos.map(trabajos => {
          <article>
            <h2>{trabajos.nombre}</h2>
            {console.log(trabajos)};
          </article>
        })
      }
    </div>
  )
}
