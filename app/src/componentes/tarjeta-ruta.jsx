import { Link } from "react-router";

export default function TarjetaRuta({
  id,
  nombre = "Río Toltén",
  imagen,
  alt = "Vista de la ruta Río Toltén",
  distanciaKm = 5,
  dificultad = "baja",
  accesible = true,
  descripcion = "Panoramas al aire libre con preparación y cuidado.",
  enlaceTexto = "Ver ficha de ruta",
  enlaceUrl = "#",
}) {
  const destino = enlaceUrl !== "#" ? enlaceUrl : id ? `/rutas/${id}` : "#";
  const esInterno = destino.startsWith("/");

  return (
    <article className="tarjeta">
      {imagen && <img src={imagen} alt={alt} />}
      <div className="cuerpo">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <div className="meta">
          <span>{distanciaKm} km</span>
          <span>·</span>
          <span className={`chip ${dificultad}`}>dificultad {dificultad}</span>
        </div>
        {accesible && <span className="sello">Accesible</span>}
        <br />
        {esInterno ? (
          <Link to={destino} className="boton">
            {enlaceTexto}
          </Link>
        ) : (
          <a href={destino} className="boton">
            {enlaceTexto}
          </a>
        )}
      </div>
    </article>
  );
}
