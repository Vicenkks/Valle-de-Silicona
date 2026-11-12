// ENCARGO B · BannerPrincipal
// Props: titulo y subtitulo (textos). Sus valores los escribe el integrador en App.jsx.
//
// Este componente usa a otro: Buscador. El valor de su prop placeholder
// lo escribe este archivo, porque es quien usa el Buscador.
//
// Qué cambió respecto del HTML de index.html (sección .hero):
// - class pasó a className.
// - El texto fijo del h1 y del párrafo ahora son las props, entre llaves.
// - La imagen se importa en vez de escribir la ruta como texto.
// - Se agregó el Buscador debajo del texto.
import Buscador from "./buscador.jsx";
import fotoConguillio from "../../img/parque-conguillio.jpg";

export default function BannerPrincipal({ titulo, subtitulo }) {
  return (
    <section className="hero" aria-labelledby="titulo-principal">
      <div>
        <h1 id="titulo-principal">{titulo}</h1>
        <p className="introduccion">{subtitulo}</p>
        <Buscador placeholder="Busca una ruta, actividad o comuna" />
        <a className="boton" href="pages/actividades.html">
          Explorar actividades
        </a>
      </div>
      <img
        className="hero-imagen"
        src={fotoConguillio}
        alt="Paisaje del Parque Nacional Conguillío"
      />
    </section>
  );
}
