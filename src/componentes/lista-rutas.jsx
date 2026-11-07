import TarjetaRuta from './tarjeta-ruta.jsx';
import { rutas } from '../datos/rutas.js';

export default function ListaRutas() {
    return (
        <section className="lista">
            <h2>Ideas para tu próxima salida</h2>
            <div className="fila">
                {rutas.map((ruta) => (
                    <TarjetaRuta
                        key={ruta.id}
                        nombre={ruta.nombre}
                        distanciaKm={ruta.distanciaKm}
                        dificultad={ruta.dificultad}
                        accesible={ruta.accesible}
                        descripcion={ruta.descripcion}
                        enlaceTexto={ruta.enlaceTexto}
                        enlaceUrl={ruta.enlaceUrl}
                    />
                ))}
            </div>
        </section>
    );
}