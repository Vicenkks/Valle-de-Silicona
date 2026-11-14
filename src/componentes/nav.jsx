import { Link, NavLink } from "react-router";

const enlaces = [
  { texto: "Inicio", ruta: "/" },
  { texto: "Rutas", ruta: "/rutas" },
  { texto: "Emprendimientos", ruta: "/emprendimientos" },
  { texto: "Reseñas", ruta: "/resenas" },
];

export default function Encabezado() {
  return (
    <header className="encabezado">
      <Link to="/" className="logo">
        <img src="./img/araucaria.png" alt="" />
        EcoRutas
      </Link>
      <nav className="menu" aria-label="Navegación principal">
        {enlaces.map((enlace) => (
          <NavLink
            key={enlace.ruta}
            to={enlace.ruta}
            end={enlace.ruta === "/"}
            className={({ isActive }) => (isActive ? "activo" : "")}
          >
            {enlace.texto}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}