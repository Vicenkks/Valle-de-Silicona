// ENCARGO B · Buscador (va dentro de BannerPrincipal)
// Prop: placeholder (texto). Su valor lo escribe BannerPrincipal.
//
// Notas de la conversión a JSX:
// - for pasó a htmlFor y class a className.
// - <input> se cierra: <input ... />.
// - El label se oculta visualmente con .sr-only, pero los lectores de pantalla lo leen.
// El botón todavía no busca: los eventos de React se ven en la semana 11.
export default function Buscador({ placeholder }) {
  return (
    <form className="buscador" role="search">
      <label htmlFor="busqueda" className="sr-only">
        Buscar en EcoRutas
      </label>
      <input type="search" id="busqueda" placeholder={placeholder} />
      <button type="button" className="boton">
        Buscar
      </button>
    </form>
  );
}
