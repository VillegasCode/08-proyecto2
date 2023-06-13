import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1>SERVICIOS</h1>
      <section className='services'>
          <article className='service'>
            <h2>Diseño Web</h2>
            <p>Hago que tu web se vea bonita</p>
          </article>

          <article className='service'>
            <h2>Desarrollo Web</h2>
            <p>Creo tu aplicación web desde cero</p>
          </article>

          <article className='service'>
            <h2>Posicionamiento Web</h2>
            <p>Hago que tu web aparezca en Google y la vea tu público objetivo</p>
          </article>
      </section>
    </div>
  )
}
