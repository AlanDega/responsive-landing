import React from 'react'

import Header from "./Header";
import Section from "./Section";
import Wave from './Wave';

const card_url = "https://res.cloudinary.com/dalnnaod7/image/upload/v1588804820/wallpaper_iqkwmy.jpg"
const card_url2 = "https://res.cloudinary.com/dalnnaod7/image/upload/v1588804820/wallpaper2_g1nhv4.jpg"
const card_url3 = "https://res.cloudinary.com/dalnnaod7/image/upload/v1588804820/wallpaper4_fmzwwy.jpg"
const card_url4 = "https://res.cloudinary.com/dalnnaod7/image/upload/v1588804820/wallpaper3_yd3wgu.jpg"
const card_url5 = "https://res.cloudinary.com/dalnnaod7/image/upload/v1588876149/image_jer1fu.jpg"
const react_logo = "https://res.cloudinary.com/dalnnaod7/image/upload/v1588804819/logo-react_mgcmno.png"

export default function Landing() {
  return (
    <div>
        <Header />
        <div className="Hero">
          <div className="HeroGroup">
            <h1>Aprende a desarrollar y diseñar Sitios Web</h1>
            <p>Completa los cursos con las mejores herramientas en sistemas de diseño</p>
            <a> Ver el video</a>
            <div className="Logos">
              <img width="50" src="https://res.cloudinary.com/dalnnaod7/image/upload/v1588804819/logo-sketch_k53oyg.png"/>
              <img width="50" src="https://res.cloudinary.com/dalnnaod7/image/upload/v1588804819/logo-studio_cakztf.png"/>
              <img width="50" src="https://res.cloudinary.com/dalnnaod7/image/upload/v1588804819/logo-react_mgcmno.png"/>
              <img width="50" src="https://res.cloudinary.com/dalnnaod7/image/upload/v1588804819/logo-framer_lb7zja.png"/>
              <img width="50" src="https://res.cloudinary.com/dalnnaod7/image/upload/v1588804819/logo-swift_qj7onw.png"/>
              <img width="50" src="https://res.cloudinary.com/dalnnaod7/image/upload/v1588804819/logo-figma_mf8ptm.png"/>
            </div>
          <Wave />
          </div>  
        </div>  
        <div className="cards">
          <h2>Los mejores cursos de este planeta</h2>
          <section className="card__group">
            <div className="card">
                                <img src={card_url} />
                                <h3>Sistema de diseño</h3>
                                <p>10 secciones</p>
                    </div> 
                    <div className="card">
                                <img src={card_url2} />
                                <h3>React para diseñadores</h3>
                                <p>12 secciones</p>
                    </div> 
                    <div className="card">
                                <img src={card_url3} />
                                <h3>Diseño de sonido</h3>
                                <p>5 secciones</p>
                    </div> 
                    <div className="card">
                                <img src={card_url4} />
                                <h3>ARKit 2</h3>
                                <p>10 secciones</p>
                    </div> 
          </section>
        
          </div>
        <Section 
          image={card_url5}
          logo={react_logo}
          title="React para diseñadores"
          text="Aprende a desarrollar sitios web usando React
          y las más eficientes librerias para poner tú producto
          en línea."
        />
      </div>
  )
}



