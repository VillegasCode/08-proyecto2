import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>

      <h1>Hola soy Alex Villegas y soy Desarrollador Web en el mundo entero gracias al internet y a que soy bilingüe,
        y ofrezco mis servicios de programación y desarrollo de software, domino las siguientes tecnologías:
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

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y relevancia en internet.
        <Link to="/contacto">Contacta conmigo</Link>
      </h2>

      <section className='lasts-works'>
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <div className='works'>

        </div>
      </section>
    </div>
  )
  }