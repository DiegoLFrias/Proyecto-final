import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Container, Modal, ModalBody, ModalHeader, Formgroup, ModalFooter } from 'reactstrap';
import Table from 'react-bootstrap/Table';

const Aprobada = true
const NoCursada = false
const plan = [
  { id: 1, nombre: "Sistemas y Organizaciones", nivel: 1, estado: Aprobada },
  { id: 2, nombre: "Algoritmos y Estructura de Datos", nivel: 1, estado: Aprobada },
  { id: 3, nombre: "Álgebra y Geometría Analítica", nivel: 1, estado: Aprobada },
  { id: 4, nombre: "Análisis Matemático I", nivel: 1, estado: Aprobada },
  { id: 5, nombre: "Matemática Discreta", nivel: 1, estado: Aprobada },
  { id: 6, nombre: "Química", nivel: 1, estado: NoCursada },
  { id: 7, nombre: "Arquitectura de Computadores", nivel: 1, estado: NoCursada },
  { id: 8, nombre: "Ingeniería y Sociedad", nivel: 1, estado: NoCursada },
  { id: 9, nombre: "Análisis de Sistemas", nivel: 2, estado: Aprobada },
  { id: 10, nombre: "Sintaxis y Semántica de los Lenguajes", nivel: 2, estado: Aprobada },
  { id: 11, nombre: "Paradigmas de Programación", nivel: 2, estado: Aprobada },
  { id: 12, nombre: "Probabilidad y Estadística", nivel: 2, estado: Aprobada },
  { id: 13, nombre: "Sistemas de Representación", nivel: 2, estado: Aprobada },
  { id: 14, nombre: "Inglés Técnico Nivel I", nivel: 2, estado: Aprobada },
  { id: 15, nombre: "Física I", nivel: 2, estado: NoCursada },
  { id: 16, nombre: "Análisis Matemático II", nivel: 2, estado: Aprobada },
  { id: 17, nombre: "Diseño de Sistemas", nivel: 3, estado: NoCursada },
  { id: 18, nombre: "Inglés Técnico Nivel II", nivel: 3, estado: Aprobada },
  { id: 19, nombre: "Sistemas Operativos", nivel: 3, estado: NoCursada },
  { id: 20, nombre: "Gestión de Datos", nivel: 3, estado: NoCursada },
  { id: 21, nombre: "Matemática Superior", nivel: 3, estado: NoCursada },
  { id: 22, nombre: "Economía", nivel: 3, estado: NoCursada },
  { id: 23, nombre: "Física II", nivel: 3, estado: NoCursada },
  { id: 24, nombre: "Comunicaciones", nivel: 4, estado: NoCursada },
  { id: 25, nombre: "Redes de Información", nivel: 4, estado: NoCursada },
  { id: 26, nombre: "Administración de Recursos", nivel: 4, estado: NoCursada },
  { id: 27, nombre: "Investigación Operativa", nivel: 4, estado: NoCursada },
  { id: 28, nombre: "Teoría de Control", nivel: 4, estado: NoCursada },
  { id: 29, nombre: "Ingeniería en Software", nivel: 4, estado: NoCursada },
  { id: 30, nombre: "Simulación", nivel: 4, estado: NoCursada },
  { id: 31, nombre: "Legislación", nivel: 4, estado: NoCursada },
  { id: 32, nombre: "Sistemas de Gestión", nivel: 5, estado: NoCursada },
  { id: 33, nombre: "Proyecto Final", nivel: 5, estado: NoCursada },
  { id: 34, nombre: "Administración Gerencial", nivel: 5, estado: NoCursada },
  { id: 35, nombre: "Inteligencia Artificial", nivel: 5, estado: NoCursada }
]


function MostrarMaterias(i) {

  return (

    <td>{plan.filter(materia => materia.nivel == i).map(materiaFiltrada => (
      <div>
        {materiaFiltrada.nombre}
        <br></br>
        {materiaFiltrada.estado ? <b>(Aprobada)</b> : ""}
      </div>
    ))}</td>


  );
}






const Tabla = () => {

  const [boton, setBoton] = useState(false);
  const abrirCerrarBoton = () => {
    setBoton(!boton);
  }
  return (
    <>
      <Container>
        <Table striped="columns" responsive bordered variant="dark">
          <tbody>
            <tr>
              <th>Nivel 1</th>
              <th>Nivel 2</th>
              <th>Nivel 3</th>
              <th>Nivel 4</th>
              <th >Nivel 5</th>
            </tr>
            {MostrarMaterias(1)}
            {MostrarMaterias(2)}
            {MostrarMaterias(3)}
            {MostrarMaterias(4)}
            {MostrarMaterias(5)}
          </tbody>
        </Table>

      </Container>
    </>
  )
}

export default Tabla;
