import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Resenas from "../componentes/Resenas.jsx";
import { API_URL } from "../api.js";

export default function DetalleRuta() {
  const { id } = useParams();
  const [ruta, setRuta] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);
  const [noEncontrada, setNoEncontrada] = useState(false);

  useEffect(() => {
    setCargando(true);
    setNoEncontrada(false);
    setError("");
    setRuta(null);

    fetch(`${API_URL}/rutas/${id}`)
      .then((respuesta) => {
        if (respuesta.status === 404) {
          setNoEncontrada(true);
          return null;
        }
        if (!respuesta.ok) throw new Error(`La API respondió ${respuesta.status}`);
        return respuesta.json();
      })
      .then((datosRuta) => {
        if (!datosRuta) return;
        setRuta(datosRuta);
      })
      .catch(() => {
        setError("No se pudo cargar la ruta. ¿Está corriendo la API?");
      })
      .finally(() => {
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return (
      <section className="lista" aria-labelledby="titulo-detalle">
        <h1 id="titulo-detalle">Cargando ruta...</h1>
        <p>Obteniendo los datos desde el servidor.</p>
      </section>
    );
  }

  if (error) return <p className="lista estado error" role="alert">{error}</p>;

  if (noEncontrada || !ruta) {
    return (
      <section className="lista" aria-labelledby="titulo-detalle">
        <h1 id="titulo-detalle">Ruta no encontrada</h1>
        <p>No existe una ruta con el número {id}.</p>
        <br />
        <Link to="/rutas" className="boton">
          Volver a las rutas
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="lista" aria-labelledby="titulo-detalle">
        <article className="tarjeta">
          {ruta.imagen && (
            <img
              src={ruta.imagen}
              alt={ruta.alt || `Vista de ${ruta.nombre}`}
            />
          )}
          <div className="cuerpo">
            <h1 id="titulo-detalle">{ruta.nombre}</h1>
            <p>{ruta.descripcion}</p>
            <div className="meta">
              <span>{ruta.distanciaKm} km</span>
              <span>·</span>
              <span className={`chip ${ruta.dificultad}`}>
                dificultad {ruta.dificultad}
              </span>
            </div>
            <p className="sello">
              {ruta.accesible
                ? "Accesible"
                : "No accesible para movilidad reducida"}
            </p>
            <br />
            <Link to="/rutas" className="boton">
              ← Volver a las rutas
            </Link>
          </div>
        </article>
      </section>

      <Resenas rutaId={ruta.id} />
    </>
  );
}