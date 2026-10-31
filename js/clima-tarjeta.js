async function cargarClima(lat, lon, tarjeta) {
  const contenedor = tarjeta.querySelector(".tarjeta-contenido") || tarjeta;
  const clima = document.createElement("p");
  clima.className = "clima-tarjeta";
  clima.setAttribute("aria-live", "polite");
  clima.textContent = "Cargando clima…";
  contenedor.append(clima);

  const url = "https://api.open-meteo.com/v1/forecast"
    + `?latitude=${lat}&longitude=${lon}`
    + "&current=temperature_2m,wind_speed_10m,weather_code"
    + "&timezone=America/Santiago";

  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error("La API respondió con error");
    }
    const datos = await respuesta.json();
    const { temperature_2m, wind_speed_10m, weather_code } = datos.current;
    clima.textContent = `${describirCielo(weather_code)} · ${temperature_2m} °C · ${wind_speed_10m} km/h`;
  } catch (error) {
    console.error(error);
    clima.textContent = "No pudimos cargar el clima.";
  }
}