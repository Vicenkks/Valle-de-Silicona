import TarjetaResena from './tarjeta-resena.jsx';
import { resenas } from '../datos/resenas.js';
import { rutas } from '../datos/rutas.js';

export default function ListaResenas() {
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