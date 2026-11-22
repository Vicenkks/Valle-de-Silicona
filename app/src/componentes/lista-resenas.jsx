import TarjetaResena from './tarjeta-resena.jsx';
import { useEffect, useState } from "react";
import { API_URL } from "../api.js";

export default function ListaResenas() {
    const [resenas, setResenas] = useState([]);
    const [rutas, setRutas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function cargar() {
            try {
                const respuestas = await Promise.all([
                    fetch(`${API_URL}/resenas`),
                    fetch(`${API_URL}/rutas`),
                ]);
                if (respuestas.some((respuesta) => !respuesta.ok)) {
                    throw new Error("No se pudieron cargar los datos");
                }
                const [resenas, rutas] = await Promise.all(respuestas.map((r) => r.json()));
                setResenas(resenas);
                setRutas(rutas);
            } catch {
                setError("No se pudieron cargar las reseñas. ¿Está corriendo la API?");
            } finally {
                setCargando(false);
            }
        }
        cargar();
    }, []);

    if (cargando) return <p className="lista estado" role="status">Cargando reseñas...</p>;
    if (error) return <p className="lista estado error" role="alert">{error}</p>;

    const nombreActividad = (actividadId) => {
        const ruta = rutas.find((r) => r.id === actividadId);
        return ruta ? ruta.nombre : "Actividad desconocida";
    };

    return (
        <section className="lista">
            <h2>Reseñas de los visitantes</h2>
            <div className="fila">
                {resenas.map((resena) => (
                    <TarjetaResena
                        key={resena.id}
                        nombre={resena.nombre}
                        actividad={nombreActividad(resena.actividadId)}
                        comentario={resena.comentario}
                        fecha={resena.fecha}
                        puntuacion={resena.puntuacion}
                    />
                ))}
            </div>
        </section>
    );
}