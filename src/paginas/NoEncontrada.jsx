import { Link } from "react-router";

export default function NoEncontrada() {
  return (
    <section className="lista" aria-labelledby="titulo-no-encontrada">
      <h1 id="titulo-no-encontrada">Página no encontrada</h1>
      <p>La dirección que buscas no existe. Puedes volver al inicio para seguir explorando EcoRutas.</p>
      <Link to="/" className="boton">Volver al inicio</Link>
    </section>
  );
}
