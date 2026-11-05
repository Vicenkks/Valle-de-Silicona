// ENCARGO E · TarjetaEmprendimiento
// Props: nombre, rubro y comuna (textos).
// Los valores los escribe ListaEmprendimientos, desde datos/emprendimientos.js.
//
// Qué cambió respecto del HTML de la semana 9:
// - class pasó a className.
// - Había tres <article> escritos a mano; ahora hay uno solo, con props.
export default function TarjetaEmprendimiento({ nombre, rubro, comuna }) {
  return (
    <article className="emprendimiento">
      <div className="icono"></div>
      <div>
        <h3>{nombre}</h3>
        <p>
          {rubro} · {comuna}
        </p>
      </div>
    </article>
  );
}
