import { useState, useEffect } from "react";
import { API_URL } from "../api.js";
import TarjetaEmprendimiento from "../componentes/tarjeta-emprendimiento.jsx";

export default function Emprendimientos() {
  const [emprendimientos, setEmprendimientos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarEmprendimientos() {
      try {
        const respuesta = await fetch(`${API_URL}/emprendimientos`);
        if (!respuesta.ok) {
          throw new Error(`La API respondió ${respuesta.status}`);
        }
        setEmprendimientos(await respuesta.json());
      } catch {
        setError("No se pudieron cargar los emprendimientos. ¿Está corriendo la API?");
      } finally {
        setCargando(false);
      }
    }
    cargarEmprendimientos();
  }, []);


  if (cargando) {
    return (
      <p className="lista estado" role="status">
        Cargando emprendimientos...
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
    <main className="contenedor">
      <div className="lista">
        <h2>Emprendimientos locales</h2>
        <p className="subtitulo-emprendimientos">
          Apoya a quienes comparten los sabores, oficios y experiencias de La Araucanía.
        </p>

        <div className="fila fila-rutas">
          {emprendimientos.map((item) => (
            <TarjetaEmprendimiento
              key={item.id}
              titulo={item.titulo}
              descripcion={item.descripcion}
              imagen={item.imagen}
            />
          ))}
        </div>
      </div>
    </main>
  );
}