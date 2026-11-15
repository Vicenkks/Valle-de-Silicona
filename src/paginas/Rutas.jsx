import { useState } from "react";
import { rutas } from "../datos/rutas";
import TarjetaRuta from "../componentes/tarjeta-ruta";

export default function Rutas() {
  const [filtroDificultad, setFiltroDificultad] = useState("todas");

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
            className={`boton-filtro ${filtroDificultad === "todas" ? "activo" : ""}`} onClick={() => setFiltroDificultad("todas")} > Todas ({rutas.length}) </button> <button type="button" className={`boton-filtro ${filtroDificultad === "baja" ? "activo" : ""}`}
            onClick={() => setFiltroDificultad("baja")}
          >
            Baja
          </button>
          <button
            type="button"
            className={`boton-filtro ${filtroDificultad === "media" ? "activo" : ""}`} onClick={() => setFiltroDificultad("media")} > Media </button> <button type="button" className={`boton-filtro ${filtroDificultad === "alta" ? "activo" : ""}`}
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