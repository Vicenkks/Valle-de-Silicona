import { useEffect, useState } from "react";
import TarjetaRuta from "../componentes/tarjeta-ruta";
import { API_URL } from "../api.js";

export default function Rutas() {
  const [rutas, setRutas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [filtroDificultad, setFiltroDificultad] = useState("todas");

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

  const rutasFiltradas =
    filtroDificultad === "todas"
      ? rutas
      : rutas.filter((ruta) => ruta.dificultad === filtroDificultad);

  return (
    <section className="lista">
      <div className="encabezado-rutas">
        <div>
          <h2>Rutas y Panoramas en La Araucanía</h2>
          <p className="subtitulo-rutas">
            Explora nuestras rutas recomendadas según su distancia, dificultad y accesibilidad.
          </p>
        </div>

        <div className="filtros-rutas" role="group" aria-label="Filtrar rutas por dificultad">
          <button
            type="button"
            className={`boton-filtro ${filtroDificultad === "todas" ? "activo" : ""}`}
            onClick={() => setFiltroDificultad("todas")}
          >
            Todas ({rutas.length})
          </button>
          <button
            type="button"
            className={`boton-filtro ${filtroDificultad === "baja" ? "activo" : ""}`}
            onClick={() => setFiltroDificultad("baja")}
          >
            Baja
          </button>
          <button
            type="button"
            className={`boton-filtro ${filtroDificultad === "media" ? "activo" : ""}`}
            onClick={() => setFiltroDificultad("media")}
          >
            Media
          </button>
          <button
            type="button"
            className={`boton-filtro ${filtroDificultad === "alta" ? "activo" : ""}`}
            onClick={() => setFiltroDificultad("alta")}
          >
            Alta
          </button>
        </div>
      </div>

      {rutasFiltradas.length === 0 ? (
        <p className="mensaje-vacio">
          No hay rutas registradas con dificultad "{filtroDificultad}" por el momento.
        </p>
      ) : (
        <div className="fila fila-rutas">
          {rutasFiltradas.map((ruta) => (
            <TarjetaRuta
              key={ruta.id}
              id={ruta.id}
              nombre={ruta.nombre}
              imagen={ruta.imagen}
              alt={ruta.alt || `Vista de ${ruta.nombre}`}
              distanciaKm={ruta.distanciaKm}
              dificultad={ruta.dificultad}
              accesible={ruta.accesible}
              descripcion={ruta.descripcion}
              enlaceTexto={ruta.enlaceTexto || "Ver ficha de ruta"}
              enlaceUrl={`/rutas/${ruta.id}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}