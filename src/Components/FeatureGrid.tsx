const features = [
  {
    id: "01",
    eyebrow: "Vista general",
    title: "Resumen del mes",
    description:
      "Ingresos, gastos, balance neto y presupuesto restante en una lectura más clara.",
    points: ["Lectura rápida", "Balance visible", "Menos fricción"],
  },
  {
    id: "02",
    eyebrow: "Seguimiento",
    title: "Historial financiero",
    description:
      "Consulta tus movimientos por periodos y entiende mejor el comportamiento real del mes.",
    points: ["Timeline mensual", "Patrones útiles", "Más contexto"],
  },
  {
    id: "03",
    eyebrow: "Movimiento",
    title: "Transferencias",
    description:
      "Mueve dinero entre cuentas sin mezclarlo con gastos reales ni romper tu lectura.",
    points: ["Flujo interno", "Mejor orden", "Control entre fondos"],
  },
  {
    id: "04",
    eyebrow: "Obligaciones",
    title: "Deudas y tarjetas",
    description:
      "Centraliza deuda total, cupo disponible y seguimiento de tarjetas en un solo módulo.",
    points: ["Más claridad", "Lectura visual", "Menos enredos"],
  },
  {
    id: "05",
    eyebrow: "Compromisos",
    title: "Pagos fijos",
    description:
      "Servicios, suscripciones y cuotas reunidos en una sección simple y funcional.",
    points: ["Menos olvidos", "Control mensual", "Pendientes claros"],
  },
  {
    id: "06",
    eyebrow: "Experiencia",
    title: "Diseño limpio",
    description:
      "Tema oscuro, jerarquía visual fuerte y una interfaz pensada para leerse rápido.",
    points: ["Estética premium", "Menos ruido", "Uso diario cómodo"],
  },
];

export function FeatureGrid() {
  return (
    <section id="funciones" className="section-shell pt-0">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl fade-up">
          <span className="eyebrow">Funciones principales</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Todo lo importante del mes, en módulos que sí se entienden.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.id}
              className="glass-card fade-up p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#58f089] sm:text-xs">
                    {feature.eyebrow}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {feature.title}
                  </h3>
                </div>

                <div className="pulse-soft flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#19e65d]/15 bg-[#19e65d]/10 text-sm font-semibold text-[#58f089]">
                  {feature.id}
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
                {feature.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {feature.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/72 sm:text-sm"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}