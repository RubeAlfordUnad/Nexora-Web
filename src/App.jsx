import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoImage from "./assets/nexora-logo.png";
import {
  ArrowRight,
  Bell,
  CalendarClock,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  CreditCard,
  Download,
  FileText,
  History,
  LayoutDashboard,
  Lock,
  Menu,
  Repeat,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Trash2,
  Wallet,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Funciones", href: "#features" },
  { label: "Vista", href: "#showcase" },
  { label: "Detalles", href: "#details" },
  { label: "FAQ", href: "#faq" },
];

const bullets = [
  "Registra gastos e ingresos en segundos.",
  "Mantén deudas y pagos con contexto claro.",
  "Recibe recordatorios antes del vencimiento.",
];

const features = [
  {
    icon: Wallet,
    title: "Registro rápido",
    text: "Añade movimientos sin fricción con una vista simple y pensada para el día a día.",
  },
  {
    icon: CreditCard,
    title: "Control de deudas",
    text: "Consulta lo pendiente, lo pagado y lo que viene con más contexto y menos ruido.",
  },
  {
    icon: Repeat,
    title: "Pagos recurrentes",
    text: "Sigue suscripciones y compromisos mensuales sin depender de memoria o notas externas.",
  },
  {
    icon: Bell,
    title: "Alertas oportunas",
    text: "Recibe recordatorios antes del vencimiento y evita olvidos innecesarios.",
  },
  {
    icon: History,
    title: "Historial útil",
    text: "Revisa lo que ya pasó con una experiencia limpia y fácil de recorrer.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidad visible",
    text: "Soporte, términos y control de cuenta dentro de una experiencia más seria.",
  },
];

const spotlightCards = [
  {
    id: "summary",
    eyebrow: "Resumen principal",
    title: "Empiezas entendiendo qué importa hoy.",
    body: "Nexora concentra montos clave, actividad reciente y señales útiles para que abrir la app tenga sentido desde el primer vistazo.",
    points: ["Gastos del mes", "Pendientes activos", "Actividad reciente"],
    icon: LayoutDashboard,
  },
  {
    id: "debts",
    eyebrow: "Seguimiento de deudas",
    title: "Más claridad para saber qué debes y qué ya resolviste.",
    body: "La lectura de deudas no se siente enredada. Tienes avances, estado pendiente y próximos movimientos dentro del mismo flujo.",
    points: ["Pagos realizados", "Pendientes visibles", "Menos fricción"],
    icon: CreditCard,
  },
  {
    id: "recurring",
    eyebrow: "Pagos recurrentes",
    title: "Recordatorios antes de que el olvido te cueste.",
    body: "Suscripciones, servicios y pagos mensuales quedan organizados en una rutina visual que invita a revisar y actuar a tiempo.",
    points: ["Alertas útiles", "Rutina mensual", "Más constancia"],
    icon: CalendarClock,
  },
];

const details = [
  {
    icon: LayoutDashboard,
    title: "Resumen financiero útil",
    text: "Una vista general con montos importantes y actividad reciente para entender rápido cómo vas.",
  },
  {
    icon: FileText,
    title: "Historial claro",
    text: "Consulta movimientos anteriores con una estructura más limpia y fácil de escanear.",
  },
  {
    icon: Lock,
    title: "Privacidad visible",
    text: "La experiencia comunica mejor soporte, documentos legales y control de cuenta.",
  },
  {
    icon: Trash2,
    title: "Borrado de cuenta",
    text: "Las acciones importantes se sienten accesibles y coherentes con una app moderna.",
  },
];

const steps = [
  {
    title: "Abres y entiendes",
    text: "La app te muestra rápido en qué estado estás y qué requiere atención.",
  },
  {
    title: "Actúas antes",
    text: "Los recordatorios y pagos recurrentes te ayudan a anticiparte, no a reaccionar tarde.",
  },
  {
    title: "Mantienes orden",
    text: "Con historial, deudas y exportación, el control no se queda en un solo momento.",
  },
];

const faqs = [
  {
    q: "¿Qué hace diferente a Nexora?",
    a: "No intenta hacer demasiadas cosas a la vez. Se enfoca en registrar, organizar, recordar y revisar con una experiencia clara.",
  },
  {
    q: "¿La web detecta el modo oscuro o claro del sistema?",
    a: "Sí. El tema sigue la preferencia del sistema operativo del usuario automáticamente.",
  },
  {
    q: "¿La landing sirve para la salida en App Store?",
    a: "Sí. Está pensada para conectar privacidad, soporte, términos y el enlace oficial de descarga.",
  },
  {
    q: "¿La experiencia está pensada para móvil?",
    a: "Sí. La estructura se reorganiza para celular, tablet y desktop sin depender de bloques rígidos o alturas fijas problemáticas.",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children, className = "" }) {
  return <div className={cn("container-shell", className)}>{children}</div>;
}

function Button({ children, href, variant = "primary", className = "", onClick }) {
  const classes = cn("btn", `btn-${variant}`, className);
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

function Logo() {
  return (
    <div className="brand-lockup">
      <div className="brand-logo-frame">
        <img src={logoImage} alt="Logo de Nexora" className="brand-logo-img" />
      </div>
      <div>
        <p className="brand-title">Nexora</p>
        <p className="brand-subtitle">Control financiero simple</p>
      </div>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <Container className="site-header-inner">
          <Logo />

          <nav className="nav-desktop">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <Button variant="secondary">Ver soporte</Button>
            <Button>
              Descargar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <button type="button" className="menu-button" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="mobile-drawer"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ duration: 0.22 }}
            >
              <div className="mobile-drawer-top">
                <Logo />
                <button type="button" className="menu-button" onClick={() => setOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mobile-links">
                {navLinks.map((item) => (
                  <a key={item.label} href={item.href} className="mobile-link" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <Button className="mt-2">
                  Descargar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Surface({ children, className = "" }) {
  return <div className={cn("surface", className)}>{children}</div>;
}

function Device({ compact = false, title = "Este mes", eyebrow = "Resumen" }) {
  return (
    <div className={cn("device-frame", compact && "device-frame-compact")}>
      <div className="device-screen">
        <div className="device-notch" />
        <div className="device-card">
          <div className="device-top-row">
            <div>
              <p className="device-eyebrow">{eyebrow}</p>
              <h3 className="device-title">{title}</h3>
            </div>
          </div>
          <div className="device-metrics">
            <div className="device-metric">
              <span>Gastos</span>
              <strong>$ 42</strong>
            </div>
            <div className="device-metric">
              <span>Pendiente</span>
              <strong>$ 18</strong>
            </div>
          </div>
        </div>
        <div className="device-card">
          <div className="device-row-title">
            <span>Movimientos recientes</span>
            <ChevronRight className="h-4 w-4" />
          </div>
          {[
            ["Internet", "Mañana", "-$25"],
            ["Pago deuda", "Lunes", "-$60"],
          ].map((item) => (
            <div key={item[0]} className="device-list-item">
              <div>
                <p>{item[0]}</p>
                <span>{item[1]}</span>
              </div>
              <strong>{item[2]}</strong>
            </div>
          ))}
        </div>
        {!compact ? (
          <div className="device-reminder">
            <Bell className="h-4 w-4" />
            <div>
              <p>Recordatorio activo</p>
              <span>Tu suscripción vence en 2 días</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />
      <div className="hero-grid-overlay" />

      <Container className="hero-layout">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="hero-copy"
        >
          <div className="hero-pill">
            <Sparkles className="h-4 w-4" />
            <span>App para iPhone con diseño limpio y control financiero claro</span>
          </div>

          <h1 className="hero-title">Control financiero que se siente claro desde el primer vistazo.</h1>

          <p className="hero-text">
            Nexora te ayuda a registrar movimientos, seguir deudas, organizar pagos recurrentes y revisar tu historial con una experiencia moderna, limpia y útil para el día a día.
          </p>

          <div className="hero-actions">
            <Button>
              Descargar en App Store
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="#features" variant="secondary">
              Explorar funciones
            </Button>
          </div>

          <div className="hero-bullets">
            {bullets.map((item) => (
              <div key={item} className="hero-bullet-item">
                <div className="check-badge">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="hero-visual-wrap"
        >
          <div className="hero-visual-stage">
            <div className="device-left-desktop">
              <Device compact title="Deudas" eyebrow="Seguimiento" />
            </div>
            <div className="device-main-wrap">
              <Device title="Este mes" eyebrow="Resumen" />
            </div>
            <div className="device-right-desktop">
              <Device compact title="Pagos" eyebrow="Rutina" />
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function FeatureRail() {
  const items = [...features, ...features];
  return (
    <section className="rail-section" aria-hidden="true">
      <div className="rail-track">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`${item.title}-${index}`} className="rail-pill">
              <Icon className="h-4 w-4" />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="section-block">
      <Container>
        <div className="section-head">
          <div className="section-pill">Funciones principales</div>
          <h2>Todo lo necesario para mantener orden sin que la app se vuelva pesada.</h2>
          <p>
            La propuesta de Nexora es simple: darte control real con una interfaz que se entiende rápido y se siente cómoda tanto en móvil como en desktop.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <Surface key={item.title} className="feature-surface">
                <div className="feature-icon">
                  <Icon className="h-5 w-5" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Surface>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % spotlightCards.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  const current = spotlightCards[active];
  const CurrentIcon = current.icon;

  return (
    <section id="showcase" className="section-block showcase-shell">
      <Container>
        <div className="showcase-grid">
          <div className="showcase-copy">
            <div className="section-pill section-pill-dark">Vista del producto</div>
            <h2>Más dinámica, más viva y con mejor ritmo visual para quien sí quiere conocer la app.</h2>
            <p>
              En vez de dejar bloques muertos o alturas rígidas, esta sección cambia de forma automática, responde al usuario y mantiene el layout estable en todos los tamaños.
            </p>

            <div className="showcase-tabs">
              {spotlightCards.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={cn("showcase-tab", isActive && "showcase-tab-active")}
                    onClick={() => setActive(index)}
                  >
                    <div className="showcase-tab-icon">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span>{item.eyebrow}</span>
                      <strong>{item.title}</strong>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="showcase-panel"
          >
            <div className="showcase-panel-glow showcase-panel-glow-a" />
            <div className="showcase-panel-glow showcase-panel-glow-b" />
            <div className="showcase-panel-content">
              <div>
                <div className="section-pill section-pill-dark inline-flex">
                  <Sparkles className="h-4 w-4" />
                  <span>{current.eyebrow}</span>
                </div>
                <h3>{current.title}</h3>
                <p>{current.body}</p>
                <div className="showcase-points">
                  {current.points.map((item) => (
                    <div key={item} className="showcase-point">
                      <Check className="h-4 w-4" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="showcase-preview">
                <div className="preview-main">
                  <div className="preview-main-top">
                    <div>
                      <p>Nexora</p>
                      <h4>{current.eyebrow}</h4>
                    </div>
                    <div className="preview-icon">
                      <CurrentIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="preview-lines">
                    {current.points.map((item) => (
                      <div key={item} className="preview-line">
                        <span>{item}</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="preview-float">
                  <Smartphone className="h-5 w-5" />
                  <div>
                    <p>Interacción dinámica</p>
                    <span>La sección cambia sola y mantiene el layout estable.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Details() {
  return (
    <section id="details" className="section-block">
      <Container>
        <div className="details-grid">
          <div>
            <div className="section-pill">Cómo se siente la experiencia</div>
            <h2 className="section-title-left">Una web moderna también tiene que explicar mejor el producto.</h2>
            <p className="section-text-left">
              Aquí la información está organizada en pasos y tarjetas legibles. No depende de espacios en blanco gigantes ni de composiciones que se rompen cuando cambia el ancho de pantalla.
            </p>

            <div className="steps-list">
              {steps.map((item, index) => (
                <div key={item.title} className="step-row">
                  <div className="step-index">0{index + 1}</div>
                  <Surface className="step-card">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </Surface>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-grid-cards">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <Surface key={item.title} className="detail-surface">
                  <div className="feature-icon feature-icon-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Surface>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-block cta-wrap">
      <Container>
        <div className="cta-panel">
          <div className="cta-glow cta-glow-a" />
          <div className="cta-glow cta-glow-b" />
          <div className="cta-grid">
            <div>
              <div className="section-pill section-pill-dark inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span>Nexora para iPhone</span>
              </div>
              <h2>Más orden. Menos ruido. Una experiencia que sí invita a usar la app.</h2>
              <p>
                La web ahora acompaña mejor al producto: tiene más energía visual, mejor lectura y una base mucho más ordenada para publicar, compartir y convertir.
              </p>
              <div className="cta-actions">
                <Button className="btn-light">
                  Descargar en App Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="darkOutline">Ver soporte</Button>
              </div>
            </div>

            <div className="cta-mini-grid">
              {[
                ["Tema automático", "Claro u oscuro según el sistema"],
                ["Responsive real", "Mejor comportamiento en laptop, tablet y móvil"],
                ["Más dinámica", "Animaciones suaves y secciones menos rígidas"],
                ["Lista para crecer", "Soporte, privacidad, términos y App Store"],
              ].map(([title, text]) => (
                <div key={title} className="cta-mini-card">
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-block">
      <Container>
        <div className="faq-grid">
          <div>
            <div className="section-pill">FAQ</div>
            <h2 className="section-title-left">Respuestas claras para cerrar dudas sin llenar la web de texto pesado.</h2>
            <p className="section-text-left">
              El cierre de la página también debe sentirse fluido: acordeones simples, lectura limpia y sin secciones rotas en móvil.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <Surface key={item.q} className="faq-card">
                <button type="button" className="faq-trigger" onClick={() => setOpen(open === index ? -1 : index)}>
                  <div className="faq-left">
                    <div className="feature-icon feature-icon-soft">
                      <CircleHelp className="h-5 w-5" />
                    </div>
                    <span>{item.q}</span>
                  </div>
                  <ChevronDown className={cn("faq-chevron", open === index && "faq-chevron-open")} />
                </button>
                <AnimatePresence initial={false}>
                  {open === index ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="faq-answer">{item.a}</div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Surface>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div>
          <div className="footer-brand">
            <img src={logoImage} alt="Logo de Nexora" className="footer-logo" />
            <div>
              <p className="footer-title">Nexora</p>
              <p className="footer-subtitle">Finanzas personales simples, claras y útiles.</p>
            </div>
          </div>
          <p className="footer-credit">© 2026 Nexora. Creado por Ruben Alford.</p>
        </div>

        <div className="footer-links">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#">Soporte</a>
        </div>
      </Container>
    </footer>
  );
}

function MobileCTA() {
  return (
    <div className="mobile-cta-bar">
      <div className="mobile-cta-inner">
        <Button variant="secondary" className="flex-1">
          Soporte
        </Button>
        <Button className="flex-1">Descargar</Button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <NavBar />
      <main>
        <Hero />
        <FeatureRail />
        <Features />
        <Showcase />
        <Details />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
