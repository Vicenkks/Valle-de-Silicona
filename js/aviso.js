// elementos del html pendientes
// -----------
// -----------
// -----------
// -----------

function mostrarAviso(constante_pendiente) {
//  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&timezone=auto`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.current.temperature_2m < 8) {
                // Hace frío: lleva abrigo»
            }
            else if (data.current.wind_speed_10m > 40) {
                // Viento fuerte: evita los miradores
            }
            else {
                // Buen momento para salir
            }
        })
        .catch(error => {
            console.error("Error al obtener el clima:", error);
        });
}