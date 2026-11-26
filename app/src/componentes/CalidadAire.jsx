// Taller semana 13 · API pública externa (Open-Meteo, calidad del aire)
import { useEffect, useState } from "react";

// Coordenadas de Temuco (las mismas por defecto del widget de la semana 9).
// La URL es completa y vive aquí: no usa API_URL, que es de la API propia.
const URL_CALIDAD_AIRE =
  "https://air-quality-api.open-meteo.com/v1/air-quality" +
  "?latitude=-38.74&longitude=-72.60" +
  "&current=pm2_5,pm10,uv_index" +
  "&timezone=America/Santiago";

// Nivel de PM 2,5 según los rangos de la norma chilena (promedio diario, µg/m³).
function describirAire(pm25) {
  if (pm25 <= 50) return "Bueno";
  if (pm25 <= 80) return "Regular";
  if (pm25 <= 110) return "Alerta";
  if (pm25 <= 170) return "Preemergencia";
  return "Emergencia";
}

// Consejo para salir a la ruta según el aire y el índice UV.
function avisoAireLibre(pm25, uv) {
  if (pm25 > 80) {
    return "Mala calidad del aire: mejor evita el ejercicio intenso al aire libre hoy.";
  }
  if (uv >= 8) {
    return "Radiación UV muy alta: usa bloqueador, gorro y lentes de sol.";
  }
  if (uv >= 3) {
    return "Buen día para salir. Lleva bloqueador por la radiación UV.";
  }
  return "Buen día para hacer actividades al aire libre.";
}

export default function CalidadAire() {
  const [aire, setAire] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarCalidadAire() {
      try {
        const respuesta = await fetch(URL_CALIDAD_AIRE);
        if (!respuesta.ok) {
          throw new Error(`Open-Meteo respondió ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        setAire(datos.current);
      } catch {
        setError("No pudimos cargar la calidad del aire. Revisa tu conexión.");
      } finally {
        setCargando(false);
      }
    }
    cargarCalidadAire();
  }, []);

  // Sin "if (error) return …": el error se muestra dentro de la sección
  // y el resto de la página sigue funcionando.
  return (
    <section className="lista calidad-aire" aria-labelledby="titulo-calidad-aire">
      <h2 id="titulo-calidad-aire">Calidad del aire en Temuco</h2>
      {cargando && (
        <p className="estado" role="status">
          Cargando calidad del aire…
        </p>
      )}
      {error && (
        <p className="estado error" role="alert">
          {error}
        </p>
      )}
      {aire && (
        <>
          <p>
            PM 2,5: {aire.pm2_5} µg/m³ ({describirAire(aire.pm2_5)})
          </p>
          <p>PM 10: {aire.pm10} µg/m³</p>
          <p>Índice UV: {aire.uv_index}</p>
          <p>{avisoAireLibre(aire.pm2_5, aire.uv_index)}</p>
          <p className="fuente">
            Datos de <a href="https://open-meteo.com/">Open-Meteo</a>
          </p>
        </>
      )}
    </section>
  );
}
