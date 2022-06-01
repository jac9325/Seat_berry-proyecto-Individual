import React from 'react';
import './__About.scss';

const About = () => {
  return (
    <>
      <div>
        <div className="container-fluid container-top d-flex flex-wrap">
          <div className="col-sm-4">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?t=st=1653434871~exp=1653435471~hmac=9186bc73a04faee849455c79640d44c57f312d46ffc4d317230de24e24322e49&w=996"
              alt="person"
            />
          </div>
          <div className="col-sm-8 d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center">
              <img
                src="https://wiki.uqbar.org/img/languages/React-logo.png"
                alt="react"
                className="imagen-react "
              />
            </div>
            <h1
              className="aboutme-title fw-bold text-center"
              style={{ fontFamily: 'oxigen' }}
            >
              Amilcar <br />
              Catari
            </h1>
            <p className="h3 text-center" style={{ fontFamily: 'oxigen' }}>
              Software Developer Full Stack
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid mys-skills mb-0 pb-0">
        <div>
          <h1 className="text-center pt-3 text-white">My Skills</h1>
        </div>
        <div className="container-fluid mys-skills d-flex  mt-5">
          <div className="col-6 d-flex justify-content-center">
            <ul>
              <li className="h4 text-white">Trabajo en equipo</li>
              <li className="h4 text-white">Comunicación asertiva</li>
              <li className="h4 text-white">Adaptación al cambio</li>
              <li className="h4 text-white">Trabajo bajo presión</li>
            </ul>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <ul>
              <li className="h4 text-white">Ética</li>
              <li className="h4 text-white">Compromiso</li>
              <li className="h4 text-white">Resolución de conflictos </li>
              <li className="h4 text-white">Rapidez</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-5">My Tecnologies</h1>
      </div>
      <div className="d-flex justify-content-around flex-wrap mb-5 mt-5">
        <img
          src="https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png"
          className="imagen img-thumbnail mb-3 "
          alt="..."
        />
        <img
          src="https://media.bitdegree.org/storage/media/images/2020/02/c-vs-java-c-300x282.png"
          className="imagen img-thumbnail mb-3"
          alt="..."
        />
        <img
          src="https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png"
          className="imagen img-thumbnail mb-3"
          alt="..."
        />
        <img
          src="https://www.servicepilot.com/images/integration/mongodb.webp"
          className="imagen img-thumbnail mb-3"
          alt="..."
        />
      </div>
    </>
  );
};

export default About;
