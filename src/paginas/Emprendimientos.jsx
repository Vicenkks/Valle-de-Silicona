import TarjetaEmprendimiento from '../componentes/tarjeta-emprendimiento.jsx';
import { listaEmprendimientos } from '../datos/emprendimientos.js';

export default function Emprendimientos() {
  return (
    <main className="contenedor">
      <div className="lista">
        <h2>Emprendimientos locales</h2>
        <p className="subtitulo-emprendimientos">
          Apoya a quienes comparten los sabores, oficios y experiencias de La Araucanía.
        </p>

        <div className="fila fila-rutas">
          {listaEmprendimientos.map((item) => (
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