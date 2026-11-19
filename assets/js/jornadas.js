// Valores transcritos del cartel «Jornada laboral» facilitado por CGT Gran Vía.
// Son referencias de la tabla, incluidos sus redondeos; no se recalculan.
export const jornadas = [
  { id: "39.5-5", semanal: 39.5, diasAnuales: 224, diasSemanales: 5, diaria: 8, anual: 1765, irregular: 88 },
  { id: "35-5", semanal: 35, diasAnuales: 224, diasSemanales: 5, diaria: 7, anual: 1563, irregular: 78 },
  { id: "32-5", semanal: 32, diasAnuales: 179, diasSemanales: 5, diaria: 6.5, anual: 1429, irregular: 71 },
  { id: "30-5", semanal: 30, diasAnuales: 224, diasSemanales: 5, diaria: 6, anual: 1340, irregular: 67 },
  { id: "25-5", semanal: 25, diasAnuales: 224, diasSemanales: 5, diaria: 5, anual: 1116, irregular: 55 },
  { id: "24-4", semanal: 24, diasAnuales: 179, diasSemanales: 4, diaria: 6, anual: 1071, irregular: 53 },
  { id: "20-5", semanal: 20, diasAnuales: 224, diasSemanales: 5, diaria: 4, anual: 893, irregular: 44 },
  { id: "20-4", semanal: 20, diasAnuales: 179, diasSemanales: 4, diaria: 5, anual: 893, irregular: 44 },
  { id: "18-3", semanal: 18, diasAnuales: 110, diasSemanales: 3, diaria: 6, anual: 803, irregular: 40 },
  { id: "16-2", semanal: 16, diasAnuales: 110, diasSemanales: 2, diaria: 8, anual: 877, irregular: 43 },
  { id: "12-2", semanal: 12, diasAnuales: 90, diasSemanales: 2, diaria: 6, anual: 536, irregular: 26 },
  { id: "12-3", semanal: 12, diasAnuales: 134, diasSemanales: 3, diaria: 4, anual: 536, irregular: 26 },
];

const formato = new Intl.NumberFormat("es-ES", { useGrouping: "always" });
export const numeroJornada = (numero) => formato.format(numero);

export function referenciaJornada(id) {
  const jornada = jornadas.find((fila) => fila.id === id);
  if (!jornada) return "Selecciona una jornada de la tabla de referencia.";
  const { semanal, diasAnuales, diasSemanales, diaria, anual, irregular } = jornada;
  return `
    <p class="annual-hours-selected">Jornada de ${numeroJornada(semanal)} h semanales</p>
    <dl class="annual-hours-highlights">
      <div><dt>Horas anuales</dt><dd>${numeroJornada(anual)} h</dd></div>
      <div><dt>Jornada irregular anual (5 %)</dt><dd>${numeroJornada(irregular)} h</dd></div>
    </dl>
    <dl class="annual-hours-details">
      <div><dt>Días al año</dt><dd>${diasAnuales}</dd></div>
      <div><dt>Días por semana</dt><dd>${diasSemanales}</dd></div>
      <div><dt>Horas diarias</dt><dd>${numeroJornada(diaria)} h</dd></div>
    </dl>`;
}
