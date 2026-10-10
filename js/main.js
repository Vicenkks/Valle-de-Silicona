// js/main.js — lógica global EcoRutas (Fase 1 RA1, mobile-first)
// Filtros de actividades: cambia visibilidad por data-categoria + aria-pressed
document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.filtro-btn');
  const tarjetas = document.querySelectorAll('.tarjeta-actividad');
  const sinResultados = document.getElementById('sin-resultados');

  if (botones.length === 0 || tarjetas.length === 0) return;

  botones.forEach((btn) => {
    btn.addEventListener('click', () => {
      botones.forEach((b) => {
        b.classList.remove('activo');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('activo');
      btn.setAttribute('aria-pressed', 'true');

      const filtro = btn.dataset.filtro;
      let visibles = 0;
      tarjetas.forEach((card) => {
        const mostrar = filtro === 'todas' || card.dataset.categoria === filtro;
        card.hidden = !mostrar;
        if (mostrar) visibles++;
      });
      if (sinResultados) sinResultados.hidden = visibles > 0;
    });
  });
});
