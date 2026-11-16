import TarjetaRuta from './tarjeta-ruta.jsx';
import { rutas as todasLasRutas } from '../datos/rutas.js';

export default function ListaRutas({
    titulo = "Ideas para tu próxima salida",
    rutas = todasLasRutas
}) {
    return (
        <section className="lista">
            <h2>{titulo}</h2>
            <div className="fila">
                {rutas.map((ruta) => (
                    <TarjetaRuta
                        key={ruta.id}
                        id={ruta.id}
                        nombre={ruta.nombre}
                        imagen={ruta.imagen}
                        alt={ruta.alt || `Vista de ${ruta.nombre}`}
                        distanciaKm={ruta.distanciaKm}
                        dificultad={ruta.dificultad}
                        accesible={ruta.accesible}
                        descripcion={ruta.descripcion}
                        enlaceTexto="Ver ficha de ruta"
                    />
                ))}
            </div>
        </section>
    );
}
