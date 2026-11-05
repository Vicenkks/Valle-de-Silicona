// ENCARGO A · Encabezado
// Props: enlaces (arreglo de textos) y paginaActual (texto).
// Los valores los escribe el integrador en App.jsx.
//
// Qué cambió respecto del HTML de la semana 9:
// - class pasó a className.
// - El logo se importa desde assets, en vez de escribir la ruta como texto.
// - Los tres <a> escritos a mano ahora salen de un map sobre enlaces.
// - La clase "activo" ya no está fija en Inicio: se calcula con paginaActual.
import logo from "../assets/logo.svg";

export default function Encabezado({ enlaces, paginaActual }) {
  return (
    <header className="encabezado">
      <h1 className="logo">
        <img src={logo} alt="" />
        EcoRuta Temuco
      </h1>
      <nav className="menu" aria-label="Principal">
        {enlaces.map((enlace) => (
          <a
            key={enlace}
            href="#"
            className={enlace === paginaActual ? "activo" : ""}
          >
            {enlace}
          </a>
        ))}
      </nav>
    </header>
  );
}
