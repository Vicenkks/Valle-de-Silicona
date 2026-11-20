import React from 'react';
import { Routes, Route } from "react-router";
import Nav from './componentes/nav.jsx';
import Footer from './componentes/footer.jsx';

import Inicio from './paginas/Inicio.jsx';
import Rutas from './paginas/Rutas.jsx';
import DetalleRuta from './paginas/DetalleRuta.jsx';
import Emprendimientos from './paginas/Emprendimientos.jsx';
import Listado2 from './paginas/Listado2.jsx';
import NoEncontrada from './paginas/NoEncontrada.jsx';

export default function App() {
  return (
    <div className="app-container">
      <Nav />
      
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/rutas/:id" element={<DetalleRuta />} />
          <Route path="/emprendimientos" element={<Emprendimientos />} />
          <Route path="/resenas" element={<Listado2 />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
