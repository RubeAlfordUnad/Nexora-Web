export function ContactSection() {
  return (
    <section id="contacto" className="section-shell pt-0">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Contacto</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Estamos disponibles para resolver tus dudas.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Si quieres más información sobre Nexora, disponibilidad o futuras
            novedades, puedes escribir directamente al correo oficial.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card p-6 sm:p-7">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#58f089]">
              Correo oficial
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              motwd44011@outlook.com
            </h3>

            <p className="mt-4 text-base leading-7 text-white/70">
              Puedes escribir para consultas generales, información sobre la app
              o cualquier comentario relacionado con el proyecto.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:motwd44011@outlook.com"
                className="btn-primary w-full sm:w-auto"
              >
                Enviar correo
              </a>

              <a
                href="/privacy-policy"
                className="btn-secondary w-full sm:w-auto"
              >
                Ver política de privacidad
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <article className="glass-card p-6">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#58f089]">
                Atención
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Contacto general
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/68">
                Canal disponible para información, consultas y seguimiento del
                lanzamiento.
              </p>
            </article>

            <article className="glass-card p-6">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#58f089]">
                Disponibilidad
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Lanzamiento próximo
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/68">
                Nexora continúa en desarrollo y su publicación estará disponible
                cuando la experiencia esté completamente lista.
              </p>
            </article>

            <article className="glass-card p-6">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#58f089]">
                Privacidad
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Información y uso de datos
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/68">
                Puedes revisar la política de privacidad para conocer el alcance
                de la información gestionada dentro de la app.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}