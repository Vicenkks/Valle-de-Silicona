export default function Encabezado({ enlaces, paginaActual }) {
  return (
    <header className="header-principal">
      <div className="encabezado-contenido">
        <div className="marca">
          <img src="/img/araucaria.png" alt="EcoRutas Logo" className="logo-img" />
          <a href="index.html" aria-current="page">
            EcoRutas
          </a>
        </div>
        <nav className="nav-principal" aria-label="Navegación principal">
          <ul className="nav-lista">
            {enlaces.map((enlace) => (
              <li key={enlace}>
                <a
                  href="#"
                  className={enlace === paginaActual ? "activo" : ""}
                  aria-current={enlace === paginaActual ? "page" : undefined}
                >
                  {enlace}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}