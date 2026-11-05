// ENCARGO E · ListaEmprendimientos
// Prop: emprendimientos (arreglo). El valor lo escribe el integrador en App.jsx.
//
// Igual que ListaRutas: recorre el arreglo con map y le pasa a cada
// TarjetaEmprendimiento sus datos como props, con key={emprendimiento.id}.
import TarjetaEmprendimiento from "./TarjetaEmprendimiento.jsx";

export default function ListaEmprendimientos({ emprendimientos }) {
  return (
    <section className="lista">
      <h2>Emprendimientos cercanos</h2>
      <div className="fila">
        {emprendimientos.map((emprendimiento) => (
          <TarjetaEmprendimiento
            key={emprendimiento.id}
            nombre={emprendimiento.nombre}
            rubro={emprendimiento.rubro}
            comuna={emprendimiento.comuna}
          />
        ))}
      </div>
    </section>
  );
}
