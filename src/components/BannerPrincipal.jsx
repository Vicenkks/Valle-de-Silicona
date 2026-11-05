// ENCARGO B · BannerPrincipal
// Props: titulo y subtitulo (textos).
// Los valores los escribe el integrador en App.jsx.
//
// Este componente usa a otro: Buscador. El valor de la prop placeholder
// lo escribe quien usa el Buscador, es decir, este archivo.
//
// Qué cambió respecto del HTML de la semana 9:
// - class pasó a className.
// - Los textos fijos del h2 y del p ahora son las props, entre llaves.
// - El <form> completo se movió a su propio archivo, Buscador.jsx.
import Buscador from "./Buscador.jsx";

export default function BannerPrincipal({ titulo, subtitulo }) {
  return (
    <section className="banner">
      <div>
        <h2>{titulo}</h2>
        <p>{subtitulo}</p>
      </div>
      <Buscador placeholder="Buscar una ruta…" />
    </section>
  );
}
