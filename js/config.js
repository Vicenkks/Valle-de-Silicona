// js/config.js
const fichaClima = document.querySelector(".ficha[data-lat][data-lon]");
const latitudClima = fichaClima ? fichaClima.dataset.lat : -38.74;
const longitudClima = fichaClima ? fichaClima.dataset.lon : -72.60;

const URL_CLIMA = "https://api.open-meteo.com/v1/forecast"
  + `?latitude=${latitudClima}&longitude=${longitudClima}`
  + "&current=temperature_2m,wind_speed_10m,weather_code"
  + "&timezone=America/Santiago";

const estado = document.querySelector("#estado");
const temperatura = document.querySelector("#temperatura");
const viento = document.querySelector("#viento");
const cielo = document.querySelector("#cielo");
const aviso = document.querySelector("#aviso-clima");