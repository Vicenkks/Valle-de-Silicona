// js/comunidad.js — Página Comunidad: lista de emprendimientos locales con orden "Novedades"
// Esta página tiene su propia lista y no usa js/emprendimientos.js.

// Para agregar un emprendimiento, copia uno de los bloques y cambia sus datos.
// "agregado" va como año-mes-día. Si no hay foto, deja imagen: "".
// "mapaUrl" es opcional: si lo dejas "", la tarjeta no muestra mapa.
// Para otro mapa: en Google Maps busca el lugar > Compartir > Incorporar un mapa > copia el src="..."
const emprendimientosComunidad = [
  {
    titulo: "Feria Pinto",
    descripcion: "Productos agricolas y artesanales.",
    imagen: "../img/feria-pinto.jpg",
    agregado: "2026-10-16",
    identidadLocal: "Productos de la tierra y artesanía",
    mapaUrl: "https://www.google.com/maps?q=Feria+Pinto,+Temuco&output=embed",
  },
  {
    titulo: "Centro Mercado Modelo",
    descripcion: "Feria artesanal.",
    imagen: "../img/mercado-modelo.jpg",
    agregado: "2026-10-12",
    identidadLocal: "Feria comun artesanal",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194.50966500680767!2d-72.5871641993183!3d-38.73721348238841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3dcf45660a7%3A0xd9886a78d3a3d711!2sCentro%20Mercado%20Modelo!5e0!3m2!1ses!2scl!4v1792198430838!5m2!1ses!2scl"
  },
  {
    titulo: "Cabañas rurales",
    descripcion: "Alojamiento en el campo con energía solar y manejo de residuos.",
    imagen: "",
    agregado: "2026-10-14",
    identidadLocal: "Producto sustentable",
    mapaUrl: "",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-emprendimientos");
  const botones = document.querySelectorAll(".orden-btn");
  const estado = document.getElementById("estado-orden");

  // Convierte "2026-10-16" en "16 de octubre de 2026"
  function formatearFecha(iso) {
    return new Date(iso + "T12:00:00").toLocaleDateString("es-CL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function mostrar(orden) {
    // slice() copia la lista para no cambiar el orden de la original
    const lista = emprendimientosComunidad.slice();

    if (orden === "novedades") {
      // Las fechas año-mes-día se pueden comparar como texto: la más nueva va primero
      lista.sort((a, b) => b.agregado.localeCompare(a.agregado));
    }

    contenedor.innerHTML = "";

    lista.forEach((item) => {
      const article = document.createElement("article");
      article.className = "tarjeta-actividad";

      let html = "";
      if (item.imagen) {
        html += `<img src="${item.imagen}" alt="Fotografía de ${item.titulo}" class="img-actividad" />`;
      }
      html += `
        <span class="etiqueta etiqueta-local">${item.identidadLocal}</span>
        <h2>${item.titulo}</h2>
        <p>${item.descripcion}</p>
        <p class="fecha-agregado"><small>Agregado el <time datetime="${item.agregado}">${formatearFecha(item.agregado)}</time></small></p>
      `;

      if (item.mapaUrl) {
        html += `<iframe src="${item.mapaUrl}" title="Mapa de ubicación de ${item.titulo}" class="mapa-emprendimiento" loading="lazy" allowfullscreen></iframe>`;
      }

      article.innerHTML = html;
      contenedor.appendChild(article);
    });

    estado.textContent =
      orden === "novedades"
        ? "Mostrando primero los emprendimientos agregados más recientemente."
        : "Mostrando todos los emprendimientos.";
  }

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      botones.forEach((b) => {
        b.classList.remove("activo");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("activo");
      btn.setAttribute("aria-pressed", "true");
      mostrar(btn.dataset.orden);
    });
  });

  mostrar("todos");
});