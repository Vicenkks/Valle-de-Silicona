export default function TarjetaRuta({
    nombre = "Río Toltén",
    imagen,
    alt = "Vista de la ruta Río Toltén",
    distanciaKm = 5,
    dificultad = "baja",
    accesible = true,
    descripcion = "Panoramas al aire libre con preparación y cuidado.",
    enlaceTexto = "Ver ficha de ruta",
    enlaceUrl = "#"
}) {
    return (
        <article className="tarjeta">
            {imagen && <img src={imagen} alt={alt} />}
            <div className="cuerpo">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <div className="meta">
                    <span>{distanciaKm} km</span>
                    <span>·</span>
                    <span className={`chip ${dificultad}`}>
                        dificultad {dificultad}
                    </span>
                </div>
                {accesible && <span className="sello">Accesible</span>}
                <br />
                <a href={enlaceUrl} className="boton">
                    {enlaceTexto}
                </a>
            </div>
        </article>
    );
}