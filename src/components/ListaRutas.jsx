// ENCARGO D · ListaRutas
// Prop: rutas (arreglo). El valor lo escribe el integrador en App.jsx.
//
// Este componente usa a TarjetaRuta y le escribe los valores de sus props,
// uno por cada ruta del arreglo.
//
// Qué cambió respecto del HTML de la semana 9:
// - Las tres tarjetas escritas a mano se reemplazaron por un map.
// - Cada tarjeta lleva key={ruta.id}, para que React las distinga.
import TarjetaRuta from "./TarjetaRuta.jsx";

export default function ListaRutas({ rutas }) {
  return (
    <section className="lista">
      <h2>Rutas destacadas</h2>
      <div className="fila">
        {rutas.map((ruta) => (
          <TarjetaRuta
            key={ruta.id}
            nombre={ruta.nombre}
            imagen={ruta.imagen}
            alt={ruta.alt}
            distanciaKm={ruta.distanciaKm}
            dificultad={ruta.dificultad}
            accesible={ruta.accesible}
          />
        ))}
      </div>
    </section>
  );
}
