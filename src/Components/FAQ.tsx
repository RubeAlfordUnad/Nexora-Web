const faqItems = [
  {
    question: "¿Nexora ya está disponible para descargar?",
    answer:
      "Todavía no. La app continúa en desarrollo y su lanzamiento llegará próximamente en App Store.",
  },
  {
    question: "¿Qué funciones incluye Nexora?",
    answer:
      "Nexora reúne control mensual, historial financiero, deudas, transferencias entre cuentas y pagos fijos en una sola experiencia.",
  },
  {
    question: "¿Está enfocada en finanzas personales?",
    answer:
      "Sí. La app está pensada para ayudar a organizar y visualizar el dinero de forma más clara en el uso diario.",
  },
  {
    question: "¿Cómo puedo ponerme en contacto?",
    answer:
      "Puedes escribir directamente a motwd44011@outlook.com para consultas generales o información adicional.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-shell pt-0">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Lo esencial, claro y directo.
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="glass-card group rounded-[1.75rem] p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-medium text-white marker:hidden">
                <div className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-white/40 transition group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-4 text-white/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}