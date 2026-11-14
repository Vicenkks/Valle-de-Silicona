export default function PiePagina() {
  return (
    <footer className="pie">
      <div className="pie-contenido">
        <h2>EcoRutas</h2>
        <p>Información para descubrir La Araucanía con respeto por sus comunidades y naturaleza.</p>
        <ul className="enlaces-pie">
          <li>
            <a href="https://www.conaf.cl/" target="_blank" rel="noopener noreferrer">
              CONAF <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>
          </li>
          <li>
            <a href="https://www.sernatur.cl/" target="_blank" rel="noopener noreferrer">
              Sernatur <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>
          </li>
        </ul>
        <p className="copy">© 2026 EcoRutas</p>
      </div>
    </footer>
  );
}