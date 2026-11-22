import { useState, useEffect } from "react";
import { Link } from "react-router";
import { API_URL } from "../api.js";
import BannerPrincipal from "../componentes/banner-principal.jsx";
import TarjetaRuta from "../componentes/tarjeta-ruta.jsx";

export default function Inicio() {
  const [rutas, setRutas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarRutas() {
      try {
        const respuesta = await fetch(`${API_URL}/rutas`);
        if (!respuesta.ok) {
          throw new Error(`La API respondió ${respuesta.status}`);
        }
        setRutas(await respuesta.json());
      } catch {
        setError("No se pudieron cargar las rutas. ¿Está corriendo la API?");
      } finally {
        setCargando(false);
      }
    }
    cargarRutas();
  }, []);

  if (cargando) {
    return (
      <p className="lista estado" role="status">
        Cargando rutas...
      </p>
    );
  }

  if (error) {
    return (
      <p className="lista estado error" role="alert">
        {error}
      </p>
    );
  }

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