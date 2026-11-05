// ENCARGO A · PiePagina
// Sin props: el texto es igual en todas las páginas.
//
// Qué cambió respecto del HTML de la semana 9: solo class pasó a className.
export default function PiePagina() {
  return (
    <footer className="pie">
      <p>© 2026 EcoRuta Temuco · Proyecto ICINF1107 UCT</p>
      <p>
        <a href="#">Contacto</a> · <a href="#">Accesibilidad</a> ·{" "}
        <a href="#">GitHub</a>
      </p>
    </footer>
  );
}
