// lab semana 12
import { useEffect, useState } from "react";
import { API_URL } from "../api.js";
import FormularioResena from "./FormularioResena.jsx";

export default function Resenas({ rutaId }) {
  const [resenas, setResenas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [errorBorrar, setErrorBorrar] = useState("");

  useEffect(() => {
    async function cargarResenas() {
      setCargando(true);
      setError("");
      try {
        const respuesta = await fetch(
          `${API_URL}/resenas?actividadId=${rutaId}`,
        );
        if (!respuesta.ok) {
          throw new Error(`La API respondió ${respuesta.status}`);
        }
        setResenas(await respuesta.json());
      } catch {
        setError("No se pudieron cargar las reseñas. ¿Está corriendo la API?");
      } finally {
        setCargando(false);
      }
    }
    cargarResenas();
  }, [rutaId]);

  async function borrar(idResena) {
    setErrorBorrar("");
    try {
      const respuesta = await fetch(`${API_URL}/resenas/${idResena}`, {
        method: "DELETE",
      });
      if (!respuesta.ok) {
        throw new Error(`La API respondió ${respuesta.status}`);
      }
      setResenas(resenas.filter((r) => r.id !== idResena));
    } catch {
      setErrorBorrar("No se pudo borrar la reseña. Inténtalo de nuevo.");
    }
  }

  function agregar(nueva) {
    setResenas([...resenas, nueva]);
  }

  if (cargando) {
    return (
      <p className="lista estado" role="status">
        Cargando reseñas…
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
    <section className="lista resenas" aria-labelledby="titulo-resenas">
      <h3 id="titulo-resenas">Reseñas de esta ruta ({resenas.length})</h3>

      {errorBorrar && (
        <p className="estado error" role="alert">
          {errorBorrar}
        </p>
      )}

      {resenas.length === 0 ? (
        <p className="mensaje-vacio">Aún no hay reseñas para esta ruta.</p>
      ) : (
        <ul>
          {resenas.map((resena) => (
            <li key={resena.id} className="resena">
              <strong>{resena.nombre}</strong>{" "}
              <span>{resena.puntuacion}/10</span>
              <p>{resena.comentario}</p>
              <small>{resena.fecha}</small>
              <br />
              <button
                type="button"
                className="borrar"
                aria-label={`Borrar la reseña de ${resena.nombre}`}
                onClick={() => borrar(resena.id)}
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      )}

      <FormularioResena rutaId={rutaId} onCreada={agregar} />
    </section>
  );
}
