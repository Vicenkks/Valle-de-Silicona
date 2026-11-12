import feriaRainMapu from '../../img/feria-rain-mapu.jpg';

export default function TarjetaEmprendimiento() {
  return (
    <section className="seccion" aria-labelledby="emprendimientos-locales">
      <h2 id="emprendimientos-locales">Emprendimientos locales</h2>
      <div className="rejilla rejilla-tres">
        <article className="tarjeta">
          <img
            className="tarjeta-imagen"
            src={feriaRainMapu}
            alt="Puesto de la feria local Rain Mapu"
          />
          <div className="tarjeta-contenido">
            <h3>Feria Rain Mapu</h3>
            <p>Sabores y productos locales en Teodoro Schmidt.</p>
            <a href="pages/comunidad.html">Conocer emprendimientos</a>
          </div>
        </article>
      </div>
    </section>
  );
}
