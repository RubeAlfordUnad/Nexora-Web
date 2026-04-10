import { Navbar } from "@/Components/Navbar";
import { Hero } from "@/Components/Hero";
import { FeatureGrid } from "@/Components/FeatureGrid";
import { ScreenshotShowcase } from "@/Components/ScreenshotShowcase";
import { ContactSection } from "@/Components/ContactSection";
import { FAQ } from "@/Components/FAQ";
import { Footer } from "@/Components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <ScreenshotShowcase />

      <section id="beneficios" className="section-shell">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl fade-up">
            <span className="eyebrow">Beneficios</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Claridad real para el día a día.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              Nexora está pensada para simplificar el seguimiento financiero
              personal con una experiencia visual limpia, rápida y fácil de
              interpretar.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Todo conectado",
                text: "Ingresos, gastos, deudas, transferencias y pagos fijos dentro de una misma experiencia.",
              },
              {
                title: "Lectura más rápida",
                text: "Visualiza el estado del mes sin perder tiempo entre módulos o pantallas innecesarias.",
              },
              {
                title: "Diseño enfocado",
                text: "Una interfaz oscura, moderna y clara para dar prioridad a la información importante.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="glass-card fade-up p-5"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lanzamiento" className="section-shell pt-0">
        <div className="mx-auto max-w-6xl">
          <div className="cta-card fade-up p-5 sm:p-7 lg:p-9">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
              <div>
                <span className="eyebrow">Disponibilidad</span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Nexora llegará próximamente a App Store.
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                  La app se encuentra en desarrollo y sigue puliendo su
                  experiencia para ofrecer una gestión financiera más clara,
                  rápida y consistente desde el primer uso.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="#screenshots" className="btn-primary w-full sm:w-auto">
                    Ver pantallas
                  </a>
                  <a href="#contacto" className="btn-secondary w-full sm:w-auto">
                    Contacto
                  </a>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="store-badge">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#58f089]">
                      Estado
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      En desarrollo
                    </p>
                  </div>

                  <div className="store-badge">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#58f089]">
                      Tienda
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      App Store
                    </p>
                  </div>

                  <div className="store-badge">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#58f089]">
                      Enfoque
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Calidad y claridad
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#58f089]">
                  Descarga
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  Próximamente en App Store
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
                  Nexora está diseñada para reunir en un solo lugar el control
                  mensual, el historial financiero, las deudas, las
                  transferencias y los pagos recurrentes.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="store-badge">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-xl text-white">
                        
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                          Disponible en
                        </p>
                        <p className="text-lg font-semibold text-white">
                          App Store
                        </p>
                      </div>
                      <div className="ml-auto rounded-full border border-[#19e65d]/20 bg-[#19e65d]/10 px-3 py-1 text-xs font-medium text-[#58f089]">
                        Próximamente
                      </div>
                    </div>
                  </div>

                  <div className="store-badge">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-lg text-white">
                        ✉
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                          Contacto
                        </p>
                        <p className="text-lg font-semibold text-white">
                          motwd44011@outlook.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <FAQ />
      <Footer />
    </main>
  );
}