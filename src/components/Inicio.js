import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>Hola soy <strong>Alex Villegas</strong> y soy Desarrollador Web en el mundo entero gracias al internet y a que soy bilingüe,
        y ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> de software, domino las siguientes tecnologías:
      </h1>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>REACT</li>
        <li>MySQL</li>
        <li>Postgress</li>
        <li>Postman</li>
        <li>P5JS</li>
        <li>GIT</li>
      </ul>

      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y relevancia en internet.
        <Link to="/contacto">Contacta conmigo</Link>
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <div className='works'>
            <ListadoTrabajos limite="3"/>
        </div>
      </section>
    </div>
  )
  }