
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Botones from './componentes/estudios'
import Menu from './componentes/nav'
import Carrusel from './componentes/carrusel'
import Contacto from './componentes/contacto'
import Footer from './componentes/footer'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/inicio'

function App() {
  return (
    <div className="App">
      <Router>
        <Menu /> {/* Acá tengo un problema con el menú de hamburguesa, lo trate de hacer desde 0 y no me sigue apareciendo la imágen de hamburguesa, no sé qué puede ser lo que está fallando*/}
        <Routes>
          <Route path="/" element={<Inicio />}> </Route>
          <Route path="/estudios" element={<Botones />}>  </Route>
          <Route path="/hobbies" element={<Carrusel />}>      </Route>
          <Route path="/contacto" element={<Contacto />}>      </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
