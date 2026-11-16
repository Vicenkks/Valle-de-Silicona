export default function TarjetaEmprendimiento({ titulo, descripcion, imagen }) {
  return (
    <article className="tarjeta">
      {imagen && (
        <img
          src={imagen}
          alt={`Imagen de ${titulo}`}
        />
      )}
      <div className="cuerpo">
        <h3>{titulo}</h3>
        <p className="descripcion-emprendimiento">
          {descripcion}
        </p>
      </div>
    </article>
  );
}