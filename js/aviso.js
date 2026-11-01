function mostrarAviso(clima, destino = aviso) {
    if (clima.temperature_2m < 8) {
        destino.textContent = "Hace frío: lleva abrigo";
    } else if (clima.wind_speed_10m > 40) {
        destino.textContent = "Viento fuerte: evita los miradores";

    } else {
        destino.textContent = "Buen momento para salir";
        destino.style.backgroundColor = "#dcf8d7";
        destino.style.border = "#cbf5c6";
        destino.style.color = "#163112"
    }


    destino.hidden = false;
}
