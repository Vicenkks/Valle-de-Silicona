// ENCARGO C · TarjetaRuta
// Props: nombre, imagen, alt, distanciaKm, dificultad y accesible.
// Los valores los escribe ListaRutas, desde los datos de datos/rutas.js.
//
// Qué cambió respecto del HTML de la semana 9:
// - class pasó a className e <img> se cerró: <img ... />.
// - Había tres <article> escritos a mano; ahora hay uno solo, con props.
// - La clase del chip se arma con la dificultad: "chip baja", "chip alta"...
// - El sello Accesible aparece solo si accesible es true: {accesible && ...}
export default function TarjetaRuta({
  nombre,
  imagen,
  alt,
  distanciaKm,
  dificultad,
  accesible,
}) {
  return (
    <article className="tarjeta">
      <img src={imagen} alt={alt} />
      <div className="cuerpo">
        <h3>{nombre}</h3>
        <p className="meta">
          {distanciaKm} km
          <span className={"chip " + dificultad}>{dificultad}</span>
          {accesible && <span className="sello">♿ Accesible</span>}
        </p>
        <a href="#" className="boton">
          Ver ruta
        </a>
      </div>
    </article>
  );
}
