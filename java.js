document.addEventListener("DOMContentLoaded", () => {
  const semanasContainer = document.getElementById("semanasContainer");
  if (!semanasContainer) return; // Solo se ejecuta en tareas.html

  // Iconos estilizados para cada semana
  const iconosSemanas = [
    "🌸", "🎨", "💖", "📊", "🚀", "💡", "✨", 
    "🌈", "⚡", "🌟", "🔍", "📈", "🎓", "👑"
  ];
  
  // Títulos descriptivos para cada semana
  const titulosSemanas = [
    "Semana 1 - Formulación del proyecto y selección de la arquitectura",
    "Semana 2 - Despliegue y configuración de monitores de datos",
    "Semana 3 - Modelamiento físico y mecanismos de integración",
    "Semana 4 - Sustentación y validación de la infraestructura de datos",
    "Semana 5 - Configuración de la instancia y gestión de memoria del servidor",
    "Semana 6 - Innovación",
    "Semana 7 - Optimización",
    "Semana 8 - Creatividad",
    "Semana 9 - Energía",
    "Semana 10 - Brillantez",
    "Semana 11 - Investigación",
    "Semana 12 - Crecimiento",
    "Semana 13 - Aprendizaje",
    "Semana 14 - Éxito"
  ];

  // Configuración de las 4 Unidades
  const unidades = [
    { numero: 1, titulo: "Unidad I", inicio: 1, fin: 4 },
    { numero: 2, titulo: "Unidad II", inicio: 5, fin: 8 },
    { numero: 3, titulo: "Unidad III", inicio: 9, fin: 12 },
    { numero: 4, titulo: "Unidad IV", inicio: 13, fin: 14 }
  ];

  // Generar las secciones por Unidad
  unidades.forEach((unidad) => {
    // Contenedor principal de la Unidad
    const unidadBlock = document.createElement("div");
    unidadBlock.classList.add("unidad-block");

    // Título de la Unidad
    const unidadTitle = document.createElement("h2");
    unidadTitle.classList.add("unidad-title");
    unidadTitle.textContent = unidad.titulo;
    unidadBlock.appendChild(unidadTitle);

    // Grid de semanas dentro de esta Unidad
    const grid = document.createElement("div");
    grid.classList.add("semanas-grid");

    for (let i = unidad.inicio; i <= unidad.fin; i++) {
      const semanaCard = document.createElement("a");
      semanaCard.href = `semana${i}.html`;
      semanaCard.classList.add("semana-card");

      const icono = document.createElement("div");
      icono.classList.add("semana-icon");
      icono.textContent = iconosSemanas[i - 1];

      const titulo = document.createElement("div");
      titulo.classList.add("semana-title");
      titulo.textContent = titulosSemanas[i - 1];

      semanaCard.appendChild(icono);
      semanaCard.appendChild(titulo);
      grid.appendChild(semanaCard);
    }

    unidadBlock.appendChild(grid);
    semanasContainer.appendChild(unidadBlock);
  });
});