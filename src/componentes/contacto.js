import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

class Contacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], comentario: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <section className="Contacto">
        <h2>Complete el formulario para contactarme</h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName" sm={5}>

              <Form.Label><h6>Nombre y apellido:</h6></Form.Label>
              <Form.Control type="name" placeholder="Ingresar nombre completo..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" sm={5}>
              <Form.Label><h6>Email:</h6></Form.Label>
              <Form.Control type="email" placeholder="Ingresar email..." />
            </Form.Group>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formGridAddress">
                <Form.Label><h6>Domicilio:</h6></Form.Label>
                <Form.Control placeholder="Ejemplo: Calle falsa 123" />
              </Form.Group>
            </Col>

          </Row>

          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridPais" sm={5}>
              <Form.Label><h6>Pais:</h6></Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridProvincia" sm={5}>
              <Form.Label><h6>Provincia:</h6></Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Row className="mb-1">
            <Form.Group as={Col} controlId="formGridCity" sm={11}>
              <Form.Label><h5>¿Por qué desea contactarme?:</h5></Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Row>

          <br></br>
          <Button variant="dark" type="submit">
            Enviar
          </Button>
          <br></br>
        </Form>
        <br></br>
        <h3 class="tittle">Podés dejar sugerencias anónimamente para mi página :D</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1" sm={12}>
            <Form.Control as="textarea" rows={4}
              onChange={this.handleChange}
              value={this.state.comentario}
              placeholder="Escriba su comentario..." />
            <br></br>
          </Form.Group>

          <Button variant="dark" type="submit">
            Comentar
          </Button>
          <br></br>
          <Comentario items={this.state.items} />
          <br></br>



        </Form>
      </section>
    );
  }

  handleChange(e) {
    this.setState({ comentario: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.comentario.length === 0) {
      return;
    }
    const newItem = {
      comentario: this.state.comentario,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      comentario: ''
    }));
  }
}

class Comentario extends React.Component {
  render() {
    return (

      <Form.Group as={Row} className="mb-3">

        <Col md="auto">
          <ListGroup as="ol" numbered >
            {this.props.items.map(item => (

              <ListGroup.Item as="li" key={item.id}>

                {item.comentario}</ListGroup.Item>

            ))}</ListGroup>

        </Col>
      </Form.Group>
    );
  }
}
export default Contacto