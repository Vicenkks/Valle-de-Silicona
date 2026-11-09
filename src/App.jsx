import React from 'react'

// Importación de los componentes
import Aviso from './componentes/aviso.jsx'
import BannerPrincipal from './componentes/banner-principal.jsx'
import Footer from './componentes/footer.jsx'
import Nav from './componentes/nav.jsx'
import ListaRutas from './componentes/lista-rutas.jsx'
import TarjetaEmprendimiento from './componentes/tarjeta-emprendimiento.jsx'
import TarjetaOfertas from './componentes/tarjeta-ofertas.jsx'

export default function App() {
    return (
        <div className="app-container">
            {/* Barra de navegación */}
            <Nav
                enlaces={['Inicio', 'Actividades', 'Ofertas', 'Comunidad']}
                paginaActual="Inicio"
            />

            {/* Contenido principal: banner, tarjetas y aviso */}
            <main id="contenido" className="contenedor">
                <BannerPrincipal
                    titulo="Conoce La Araucanía de forma responsable"
                    subtitulo="Encuentra actividades, rutas y emprendimientos locales para planificar una visita conectada con el territorio."
                />

                <TarjetaEmprendimiento />
                <TarjetaOfertas /> 
                <ListaRutas />

                <Aviso />
            </main>

            {/* Pie de página */}
            <Footer />
        </div>
    )
}
