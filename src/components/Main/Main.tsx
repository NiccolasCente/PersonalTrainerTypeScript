import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Main.css';

import Main1 from '../../assets/Main/Main1.jpg';
import Main2 from '../../assets/Main/Main2.jpg';

const Main: React.FC = () => {
  return (
    <main>
      <Container fluid className="p-0"> 
        <Row className="gx-0"> 
          <Col md={6} className="d-flex align-items-stretch p-0"> 
            <Card className="text-white text-center card-overlay">
              <Card.Img src={Main1} alt="Imagem da esquerda" className="img-bg" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-center">
                <Card.Title className="display-4 fw-bold">Para Mulheres</Card.Title>
                <Card.Text className="mb-4">
                Nossos treinos são personalizados para atender às necessidades únicas de cada mulher, promovendo força, resistência e bem-estar. Se você busca tonificar, 
                emagrecer ou aumentar a confiança, junte-se a nós e descubra como podemos ajudá-la a alcançar seus objetivos de forma saudável e divertida!
                </Card.Text>
                <Button variant="danger" className="mx-auto">Junte-se a nós</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={6} className="d-flex align-items-stretch p-0"> 
            <Card className="text-white text-center card-overlay">
              <Card.Img src={Main2} alt="Imagem da direita" className="img-bg" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-center">
                <Card.Title className="display-4 fw-bold">Para Homens</Card.Title>
                <Card.Text className="mb-4">
                Entendemos que os homens buscam desafios e resultados. Oferecemos treinos adaptáveis para aumentar a força e melhorar a resistência, atendendo a todas as metas, desde iniciantes até atletas experientes. Venha conhecer nosso ambiente motivador e inicie sua jornada rumo ao corpo que deseja!
                </Card.Text>
                <Button variant="danger" className="mx-auto">Junte-se a nós</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
