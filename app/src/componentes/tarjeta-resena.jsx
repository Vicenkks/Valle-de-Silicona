export default function TarjetaResena({
    nombre = "Anónimo",
    actividad = "Actividad",
    comentario = "",
    fecha = "",
    puntuacion = 0
}) {
    return (
        <article className="tarjeta">
            <div className="cuerpo">
                <h3>{nombre}</h3>
                <p>{comentario}</p>
                <div className="meta">
                    <span>{actividad}</span>
                    <span>·</span>
                    <span>{fecha}</span>
                </div>
                <span className="chip">Puntuación: {puntuacion}/10</span>
            </div>
        </article>
    );
}