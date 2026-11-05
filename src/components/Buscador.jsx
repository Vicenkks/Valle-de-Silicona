// ENCARGO B · Buscador (va dentro de BannerPrincipal)
// Prop: placeholder (texto).
// El valor lo escribe BannerPrincipal, que es quien usa este componente.
//
// Qué cambió respecto del HTML de la semana 9:
// - class pasó a className y for pasó a htmlFor.
// - <input> se cerró: <input ... />.
// - El placeholder ahora es la prop.
// El botón todavía no busca: los eventos de React se ven en la semana 11.
export default function Buscador({ placeholder }) {
  return (
    <form className="buscador" role="search">
      <label htmlFor="busqueda" className="solo-lector">
        Buscar una ruta
      </label>
      <input type="search" id="busqueda" placeholder={placeholder} />
      <button type="button">Buscar</button>
    </form>
  );
}
