import React from 'react';
import { ofertas } from '../datos/ofertas';

export default function TarjetaOfertas() {
  return (
    <section aria-label="Ofertas disponibles" className="seccion">
      <h2>Ofertas y datos útiles</h2>
      {ofertas.map((item) => (
        <article key={item.id} className="oferta">
          <h2>{item.titulo}</h2>
          <p>{item.descripcion}</p>
          {item.esExterno ? (
            <a
              className={item.esBoton ? "boton boton-secundario" : ""}
              href={item.enlace}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.textoEnlace}{" "}
              <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>
          ) : (
            <a
              className={item.esBoton ? "boton boton-secundario" : ""}
              href={item.enlace}
            >
              {item.textoEnlace}
            </a>
          )}
        </article>
      ))}
    </section>
  );
}