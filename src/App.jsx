import React from 'react'

// Importación de los componentes
import Aviso from './componentes/aviso.jsx'
import BannerPrincipal from './componentes/banner-principal.jsx'
import Footer from './componentes/footer.jsx'
import Nav from './componentes/nav.jsx'
import TarjetaEmprendimiento from './componentes/tarjeta-emprendimiento.jsx'
import TarjetaOfertas from './componentes/tarjeta-ofertas.jsx'
import TarjetaRuta from './componentes/tarjeta-ruta.jsx'

export default function App() {
  return (
    <div className="app-container">
      {/* Barra de navegación */}
      <Nav />

      {/* Aviso importante o banner principal */}
      <Aviso />
      <BannerPrincipal />

      {/* Contenido principal o tarjetas */}
      <main>
        <TarjetaEmprendimiento />
        <TarjetaOfertas />
        <TarjetaRuta />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  )
}