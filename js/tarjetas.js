// datos pendientes
document.querySelectorAll(".tarjeta[data-lat][data-lon]").forEach((tarjeta) => {
    const lat = tarjeta.dataset.lat;
    const lon = tarjeta.dataset.lon;

    cargarClima(lat, lon, tarjeta);
});
