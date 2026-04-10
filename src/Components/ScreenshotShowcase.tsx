import Image from "next/image";

type ScreenshotItem = {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  highlights: string[];
  solves: string[];
};

const screenshots: ScreenshotItem[] = [
  {
    step: "01",
    eyebrow: "Vista principal",
    title: "Empieza el mes con claridad",
    description:
      "La pantalla principal resume lo importante sin obligarte a entrar en varias vistas para ubicarte.",
    src: "/screenshots/dashboard.jpeg",
    alt: "Pantalla principal de Nexora",
    highlights: ["Resumen del mes", "Actividad reciente", "Accesos rápidos"],
    solves: [
      "Te ubica en segundos",
      "Reduce fricción al entrar",
      "Convierte el inicio en algo útil",
    ],
  },
  {
    step: "02",
    eyebrow: "Historial financiero",
    title: "Entiende qué pasó en cada periodo",
    description:
      "La vista de historial convierte tus registros en contexto real, no solo en una lista acumulada.",
    src: "/screenshots/historial.jpeg",
    alt: "Pantalla de historial de Nexora",
    highlights: ["Timeline mensual", "Balance por mes", "Patrones útiles"],
    solves: [
      "Hace más simple revisar meses anteriores",
      "Ayuda a detectar patrones",
      "Da mejor lectura del comportamiento financiero",
    ],
  },
  {
    step: "03",
    eyebrow: "Transferencias",
    title: "Mueve dinero sin romper la lectura del mes",
    description:
      "Las transferencias quedan separadas para no mezclarse con los gastos reales.",
    src: "/screenshots/transferencias.jpeg",
    alt: "Pantalla de transferencias de Nexora",
    highlights: ["Movimiento interno", "Historial dedicado", "Más orden"],
    solves: [
      "Evita confusión con los gastos",
      "Mejora el control entre fondos",
      "Hace el flujo más claro",
    ],
  },
  {
    step: "04",
    eyebrow: "Deudas y pagos",
    title: "Controla obligaciones con una vista más aterrizada",
    description:
      "Deudas, tarjetas y pagos fijos pasan de ser algo disperso a una lectura mucho más comprensible.",
    src: "/screenshots/deudas.jpeg",
    alt: "Pantalla de deudas de Nexora",
    highlights: ["Cupo disponible", "Total adeudado", "Compromisos mensuales"],
    solves: [
      "Centraliza la lectura de obligaciones",
      "Hace más claro el estado de tus tarjetas",
      "Te da más visibilidad para decidir",
    ],
  },
];

export function ScreenshotShowcase() {
  return (
    <section id="screenshots" className="section-shell pt-0">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl fade-up">
          <span className="eyebrow">Pantallas explicadas</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Cada fase con más foco y menos scroll innecesario.
          </h2>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {screenshots.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={item.title}
                className="glass-card fade-up scroll-mt-24 p-4 sm:p-5 lg:min-h-[72svh] lg:p-7"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div
                  className={`grid items-center gap-6 lg:h-full lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 ${
                    isReversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="flex h-full flex-col justify-center">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="pulse-soft inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#19e65d]/20 bg-[#19e65d]/10 text-sm font-semibold text-[#58f089]">
                        {item.step}
                      </span>
                      <span className="eyebrow">{item.eyebrow}</span>
                    </div>

                    <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white/78 sm:text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[1.3rem] border border-white/10 bg-black/25 p-4 sm:p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#58f089] sm:text-sm">
                        Qué resuelve esta fase
                      </p>

                      <ul className="mt-4 space-y-3">
                        {item.solves.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-6 text-white/75 sm:text-base"
                          >
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#19e65d]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative mx-auto flex h-full w-full max-w-[290px] items-center justify-center sm:max-w-[320px] lg:max-w-[340px]">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(25,230,93,0.18),_transparent_60%)] blur-3xl" />
                    <div className="phone-frame float-soft relative w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={420}
                        height={860}
                        className="h-auto w-full rounded-[2rem] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}