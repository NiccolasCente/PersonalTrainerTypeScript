import React from 'react';
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';
import './Header.css';
import '../../assets/GlobalStyles.css';

import Carousel1 from "../../assets/Header/Carousel1.jpg";
import Carousel2 from "../../assets/Header/Carousel2.avif";
import Carousel3 from "../../assets/Header/Carousel3.jpg";

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home" className="fw-bold text-white gym-logo">
            Fitness Center<span style={{ color: 'red' }}>.</span>
          </Navbar.Brand>

          <Nav className="mx-auto nav-center">
            <Nav.Link href="#home" className="text-white">Início</Nav.Link>
            <Nav.Link href="#about" className="text-white">Sobre</Nav.Link>
            <Nav.Link href="#gallery" className="text-white">Serviços</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">Preços</Nav.Link>
            <Nav.Link href="#pages" className="text-white">Opiniões</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contato</Nav.Link>
          </Nav>

          <div className="align-self-end">
            <a href="#join" className="btn btn-danger">Junte-se a nós</a>
          </div>
        </div>

        <Carousel className="mt-4">
          <Carousel.Item className="carousel-item-custom">
            <img
              className="d-block w-100"
              src={Carousel1}
              alt="Primeira Imagem"
            />
            <Carousel.Caption className="carousel-caption-custom">
              <h2>Construa Seu</h2>
              <h1><strong style={{color:'black'}}>Corpo</strong></h1>
              <h3>Cosntrua Um Corpo Saúdavel Com Um Toque Profissional</h3>
              <a href="#action1" className="btn btn-primary">Junte-se a nós</a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item-custom">
            <img
              className="d-block w-100"
              src={Carousel2}
              alt="Segunda Imagem"
            />
            <Carousel.Caption className="carousel-caption-custom">
              <h2>Título H2 2</h2>
              <h1>Título H1 2</h1>
              <h3>Subtítulo H3 2</h3>
              <a href="#action2" className="btn btn-primary">Ação 2</a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item-custom">
            <img
              className="d-block w-100"
              src={Carousel3}
              alt="Terceira Imagem"
            />
            <Carousel.Caption className="carousel-caption-custom">
              <h2>Título H2 3</h2>
              <h1>Título H1 3</h1>
              <h3>Subtítulo H3 3</h3>
              <a href="#action3" className="btn btn-primary">Ação 3</a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </header>
  );
};

export default Header;
