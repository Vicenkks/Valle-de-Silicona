import { EN_PUBLICACION } from "../api.js";

export default function AvisoPublicacion() {
  if (!EN_PUBLICACION) return null;

  return (
    <p className="aviso-publicacion" role="note">
      Estás viendo la versión publicada. Los datos de la API propia
      funcionan en local y se muestran en el Demo Day. La API externa
      sí está disponible en vivo.
    </p>
  );
}