// js/config.js
const URL_CLIMA = "https://api.open-meteo.com/v1/forecast"
  + "?latitude=-38.74&longitude=-72.60" // Coordenadas de Temuco
  + "&current=temperature_2m,wind_speed_10m,weather_code"
  + "&timezone=America/Santiago";

const estado = document.querySelector("#estado");
const temperatura = document.querySelector("#temperatura");
const viento = document.querySelector("#viento");
const cielo = document.querySelector("#cielo");
const aviso = document.querySelector("#aviso-clima");