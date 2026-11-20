import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import TarjetaResena from "../componentes/tarjeta-resena.jsx";

export default function DetalleRuta() {
  const { id } = useParams();
  const [ruta, setRuta] = useState(null);
  const [resenasDeRuta, setResenasDeRuta] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [noEncontrada, setNoEncontrada] = useState(false);

  useEffect(() => {
    setCargando(true);
    setNoEncontrada(false);

    fetch(`http://localhost:3001/rutas/${id}`)
      .then((respuesta) => {
        if (respuesta.status === 404 || !respuesta.ok) {
          setNoEncontrada(true);
          return null;
        }
        return respuesta.json();
      })
      .then((datosRuta) => {
        if (!datosRuta) return;
        setRuta(datosRuta);

        // Pide las reseñas asociadas a esta ruta
        return fetch(`http://localhost:3001/resenas?actividadId=${datosRuta.id}`)
          .then((res) => (res.ok ? res.json() : []))
          .then((datosResenas) => {
            setResenasDeRuta(datosResenas);
          });
      })
      .catch(() => {
        setNoEncontrada(true);
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

      <section className="lista" aria-labelledby="titulo-resenas">
        <h2 id="titulo-resenas">
          Reseñas de esta ruta ({resenasDeRuta.length})
        </h2>
        {resenasDeRuta.length === 0 ? (
          <p className="mensaje-vacio">Aún no hay reseñas para esta ruta.</p>
        ) : (
          <div className="fila">
            {resenasDeRuta.map((resena) => (
              <TarjetaResena
                key={resena.id}
                nombre={resena.nombre}
                actividad={ruta.nombre}
                comentario={resena.comentario}
                fecha={resena.fecha}
                puntuacion={resena.puntuacion}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}