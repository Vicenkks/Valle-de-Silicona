import { Link } from "react-router";
import BannerPrincipal from "../componentes/banner-principal.jsx";
import TarjetaRuta from "../componentes/tarjeta-ruta.jsx";
import { rutas } from "../datos/rutas.js";

export default function Inicio() {
  return (
    <>
      <BannerPrincipal
        titulo="Descubre la Araucanía"
        subtitulo="Explora rutas, naturaleza y emprendimientos locales en un solo lugar."
      />

      <section className="lista">
        <h2>Rutas destacadas</h2>
        <div className="fila">
          {rutas.slice(0, 3).map((ruta) => (
            <TarjetaRuta
              key={ruta.id}
              id={ruta.id}
              nombre={ruta.nombre}
              distanciaKm={ruta.distanciaKm}
              dificultad={ruta.dificultad}
              accesible={ruta.accesible}
              descripcion={ruta.descripcion}
              enlaceTexto={ruta.enlaceTexto}
              enlaceUrl={ruta.enlaceUrl}
            />
          ))}
        </div>

        <div style={{ marginTop: "20px" }}>
          <Link to="/rutas" className="boton">
            Ver todas las rutas
          </Link>
        </div>
      </section>
    </>
  );
}