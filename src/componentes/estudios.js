import React, { useState } from 'react';
import Tabla from './tabla'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { Container } from 'reactstrap';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

import Row from 'react-bootstrap/Row';
function Boton() {
  const [show, setShow] = useState(false);

  return (
    <Container fluid>
  <Row auto>
    <Col sm={2}>
      <Figure className="Imagen">
      <Figure.Image
       
        width="50%"
        height="50%"
        alt="171x180"
        src="https://i.pinimg.com/originals/68/bb/84/68bb84caab34e8867584047f1224877b.png"
      />
        </Figure> 
    </Col>
      
      <Col sm={10}>
        <h2 className="Informacion">Secundaria</h2>
    <p className="Informacion"> Me recibí de <b>Técnico personal y profesional en informática</b> en el año 2018 en la escuela técnica N°2 de Valentín Alsina con un promedio de 8.</p>
    </Col> 
    
  </Row>
  <br></br>
  <br></br>
  <br></br>
  <Row auto>
    <Col sm={2}>
      <Figure className="Imagen">
      <Figure.Image
      
        width="50%"
        height="50%"
        alt="171x180"
        src="https://i.pinimg.com/originals/68/bb/84/68bb84caab34e8867584047f1224877b.png"
      />
        </Figure> 
    </Col>
      
      <Col sm={10}>
        <h2 className="Informacion">Diplomaturas Universitarias</h2>
      <p className="Informacion"> Estoy cursando <a href="https://sceu.frba.utn.edu.ar/cursopresencial/diplomatura-en-programacion-web-full-stack/">Programación Web Full Stack</a> desde Agosto de 2022 hasta el presente, la misma se divide en dos partes, la primera parte la estoy cursando ahora mismo y es <a href="https://sceu.frba.utn.edu.ar/course/programador-web-inicial/">Programador Web Inicial – Front End Developer</a>,
      y próximamente con la segunda parte <a href="https://sceu.frba.utn.edu.ar/course/programador-web-avanzado/"> Programador Web Avanzado – Full Stack Developer</a> que aprobando los mismos ya tendría la diplomatura completa.</p>
    </Col> 
    
  </Row>
  <br></br>
  <br></br>
  <br></br>
  <Row auto>
    <Col sm={2}>
      <Figure className="Imagen">
      <Figure.Image
      
        width="50%"
        height="50%"
        alt="171x180"
        src="https://i.pinimg.com/originals/68/bb/84/68bb84caab34e8867584047f1224877b.png"
      />
        </Figure> 
    </Col>
      
      <Col sm={10}>
      <h2 className="Informacion">Educación Superior</h2>
      <p className="Informacion"> Además, estoy estudiando <a href="https://www.frba.utn.edu.ar/ingreso/ingenieria-en-sistemas-de-informacion/">Ingeniería en sistemas de información</a> en la Universidad Tecnológica Nacional, Facultad Regional Buenos Aires
    desde el año 2020 hasta el presente. Por debajo dejo el plan de estudio de la carrera mencionada con mi seguimiento en la misma    </p>
    </Col> 
  </Row>
  <br></br>
  <br></br>
  <br></br>
   <Row ClassName="justify-content-md-center">
    <Col sm={3}></Col>
    <Col sm={9} xs={{ order: 'last' }}>
      <Button
      variant="dark"
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'No Mostrar' : 'Mostrar plan de estudio'}
      </Button>

      {show ? (
        <Tabla className="Informacion"/>
      ) : (
        <div></div>
      )}
      </Col>
      </Row> 
      <br></br>
      <br></br>
    </Container>
  );
};
export default Boton;