import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

import About1 from '../../assets/Sections/About/About.jpg';

const About: React.FC = () => {
  return (
    <section>
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col className="p-0 position-relative">
            <img
              src={About1}
              alt="Sobre mim"
              className="img-fluid w-100 about-image" 
            />
            <div className="overlay-text">
              <h2 className='h2-about'>Sobre a Academia</h2>
              <p className='p-about'>
                A academia oferece um ambiente acolhedor e motivador, onde todos são incentivados a superar seus limites. 
                Equipamentos modernos e uma equipe de profissionais capacitados estão sempre à disposição para ajudar.
              </p>
              <h2 className='h2-about'>Valores da Academia</h2>
              <p className='p-about'>
                Acreditamos que a saúde e o bem-estar devem ser prioridades na vida de todos. 
                Valorizamos a inclusão, a disciplina e o respeito, promovendo um espaço onde cada indivíduo pode se sentir à vontade para se exercitar e crescer.
                Além disso, incentivamos a formação de comunidades unidas, onde o apoio mútuo é essencial para o sucesso de cada um.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
