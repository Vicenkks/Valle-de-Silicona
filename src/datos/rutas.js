// ENCARGO D · datos de las rutas
// Cada ruta tiene un id numérico (para la key) y los mismos nombres
// que las props de TarjetaRuta. Las imágenes se importan aquí mismo.
import nielol from "../assets/nielol.svg";
import captren from "../assets/captren.svg";
import sierraNevada from "../assets/sierra-nevada.svg";

export const rutas = [
  {
    id: 1,
    nombre: "Cerro Ñielol",
    imagen: nielol,
    alt: "Sendero del Cerro Ñielol",
    distanciaKm: 4,
    dificultad: "baja",
    accesible: true,
  },
  {
    id: 2,
    nombre: "Laguna Captrén",
    imagen: captren,
    alt: "Laguna Captrén rodeada de cerros",
    distanciaKm: 2,
    dificultad: "baja",
    accesible: false,
  },
  {
    id: 3,
    nombre: "Sierra Nevada",
    imagen: sierraNevada,
    alt: "Cumbre nevada de la Sierra Nevada",
    distanciaKm: 7,
    dificultad: "alta",
    accesible: false,
  },
];
