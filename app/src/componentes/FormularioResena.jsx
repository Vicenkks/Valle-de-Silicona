
import { useState } from "react";
import { API_URL } from "../api.js";

export default function FormularioResena({ rutaId, onCreada }) {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [puntuacion, setPuntuacion] = useState("");
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  async function enviarResena(event) {
    event.preventDefault();

    setMensaje("");
    setError("");

    
    if (!nombre.trim() || !comentario.trim() || !puntuacion) {
      setError("Debes completar todos los campos.");
      return;
    }

    const nota = Number(puntuacion);

    if (!Number.isInteger(nota) || nota < 1 || nota > 10) {
      setError("La puntuación debe ser un número entre 1 y 10.");
      return;
    }

    if (!Number.isFinite(Number(rutaId))) {
      setError("No se encontró el identificador de la ruta.");
      return;
    }

    
    const hoy = new Date();
    const fecha = `${String(hoy.getDate()).padStart(2, "0")}-${String(
      hoy.getMonth() + 1
    ).padStart(2, "0")}-${hoy.getFullYear()}`;

    const nuevaResena = {
      actividadId: Number(rutaId),
      nombre: nombre.trim(),
      comentario: comentario.trim(),
      fecha,
      puntuacion: nota,
    };

    try {
      setCargando(true);

      const respuesta = await fetch(`${API_URL}/resenas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaResena),
      });

      if (respuesta.status !== 201) {
        throw new Error(`La API respondió ${respuesta.status}`);
      }

      const resenaCreada = await respuesta.json();

     
      onCreada(resenaCreada);

    
      setNombre("");
      setComentario("");
      setPuntuacion("");

      setMensaje("¡Reseña creada correctamente!");
    } catch (error) {
      setError(
        error.message || "No se pudo crear la reseña. Comprueba que la API esté funcionando."
      );
    } finally {
      setCargando(false);
    }
  }

  return (
    <form onSubmit={enviarResena}>
      <h3>Deja tu reseña</h3>

      <label htmlFor="nombre-resena">Tu nombre</label>
      <input
        id="nombre-resena"
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        placeholder="Escribe tu nombre"
        required
      />

      <label htmlFor="comentario-resena">Comentario</label>
      <textarea
        id="comentario-resena"
        value={comentario}
        onChange={(event) => setComentario(event.target.value)}
        placeholder="Escribe tu experiencia"
        required
      />

      <label htmlFor="puntuacion-resena">Puntuación (1 a 10)</label>
      <input
        id="puntuacion-resena"
        type="number"
        min="1"
        max="10"
        step="1"
        value={puntuacion}
        onChange={(event) => setPuntuacion(event.target.value)}
        required
      />

      {error && <p role="alert">{error}</p>}
      {mensaje && <p role="status">{mensaje}</p>}

      <button type="submit" disabled={cargando}>
        {cargando ? "Enviando..." : "Enviar reseña"}
      </button>
    </form>
  );
}
