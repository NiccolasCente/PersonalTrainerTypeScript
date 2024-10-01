import React from 'react';
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';
import AnimatedSection from '../Hooks/AnimatedSection';
import './Header.css';
import '../../assets/GlobalStyles.css';

import Carousel1 from "../../assets/Header/Carousel1.jpg";
import Carousel2 from "../../assets/Header/Carousel2.avif";
import Carousel3 from "../../assets/Header/Carousel3.jpg";

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <Container fluid className="p-0"> 
        <Navbar expand="lg" className="header-content">
          <Navbar.Brand href="#home" className="fw-bold text-white gym-logo">
            <AnimatedSection animation="fade-in">
            Fitness Center<span style={{ color: 'red' }}>.</span>
            </AnimatedSection>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-danger" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-center">
              <AnimatedSection animation="fade-in">
              <Nav.Link href="#home" className="text-white">Início</Nav.Link>
              </AnimatedSection>
              <AnimatedSection animation="fade-in">
              <Nav.Link href="#about" className="text-white">Sobre</Nav.Link>
              </AnimatedSection>
              <AnimatedSection animation="fade-in">
              <Nav.Link href="#gallery" className="text-white">Serviços</Nav.Link>
              </AnimatedSection>
              <AnimatedSection animation="fade-in">
              <Nav.Link href="#pricing" className="text-white">Preços</Nav.Link>
              </AnimatedSection>
              <AnimatedSection animation="fade-in">
              <Nav.Link href="#pages" className="text-white">Opiniões</Nav.Link>
              </AnimatedSection>
              <AnimatedSection animation="fade-in">
              <Nav.Link href="#contact" className="text-white">Contato</Nav.Link>
              </AnimatedSection>
            </Nav>
            <div className="align-self-end">
            <AnimatedSection animation="fade-in">
              <a href="#join" className="btn btn-danger">Junte-se a nós</a>
            </AnimatedSection>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <Carousel className="mt-4">
          <Carousel.Item className="carousel-item-custom">
            <img
              className="d-block w-100"
              src={Carousel1}
              alt="Primeira Imagem"
            />

            <Carousel.Caption className="carousel-caption-custom">
            <AnimatedSection animation="fade-in">
              <h2 className="h2-carousel">Construa Seu</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in">
              <h1 className="h1-carousel">Corpo</h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-in">
              <h3 className="h3-carousel">Construa Um Corpo Saudável Com Um Toque Profissional</h3>
            </AnimatedSection>
            <AnimatedSection animation="fade-in">
              <a href="#action1" className="btn btn-primary">Junte-se a nós</a>
            </AnimatedSection>

            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item-custom">
            <img
              className="d-block w-100"
              src={Carousel2}
              alt="Segunda Imagem"
            />
            <Carousel.Caption className="carousel-caption-custom">
              <h2 className="h2-carousel">Equipamentos e Metodologia de Ensino</h2>
              <h1 className="h1-carousel">Atual para que você progrida</h1>
              <h3 className="h3-carousel">Os Melhores Professores do Mercado</h3>
              <a href="#action2" className="btn btn-primary">Junte-se a nós</a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item-custom">
            <img
              className="d-block w-100"
              src={Carousel3}
              alt="Terceira Imagem"
            />
            <Carousel.Caption className="carousel-caption-custom">
              <h2 className="h2-carousel">Musculação, Alimentação e Disciplina são</h2>
              <h1 className="h1-carousel">Os 3 Pilares Para Sua Evolução</h1>
              <h3 className="h3-carousel">Nunca é Tarde Para Mudar De Vida</h3>
              <a href="#action3" className="btn btn-primary">Junte-se a nós</a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </header>
  );
};

export default Header;
