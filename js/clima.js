// js/clima.js
async function mostrarClima() {
  if (!estado) {
    return;
  }

  estado.textContent = "Cargando clima…";
  try {
    const respuesta = await fetch(URL_CLIMA);
    if (!respuesta.ok) {
      throw new Error("La API respondió con error");
    }
    const datos = await respuesta.json();
    console.log(datos);
    temperatura.textContent = `${datos.current.temperature_2m} °C`;
    viento.textContent = `${datos.current.wind_speed_10m} km/h`;
    cielo.textContent = describirCielo(datos.current.weather_code);
    mostrarAviso(datos.current);
    estado.textContent = "Clima actualizado.";
  } catch (error) {
    console.error(error);
    estado.textContent = "No pudimos cargar el clima.";
}
