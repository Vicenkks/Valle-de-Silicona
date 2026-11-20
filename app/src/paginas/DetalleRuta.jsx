import { Link, useParams } from "react-router";
import { rutas } from "../datos/rutas.js";
import { resenas } from "../datos/resenas.js";
import TarjetaResena from "../componentes/tarjeta-resena.jsx";

export default function DetalleRuta() {
  const { id } = useParams();
  const ruta = rutas.find((r) => r.id === Number(id));

  if (!ruta) {
    return (
      <section className="lista" aria-labelledby="titulo-detalle">
        <h1 id="titulo-detalle">Ruta no encontrada</h1>
        <p>No existe una ruta con el número {id}.</p>
        <Link to="/rutas" className="boton">
          Volver a las rutas
        </Link>
      </section>
    );
  }

  const resenasDeRuta = resenas.filter((r) => r.actividadId === ruta.id);

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
