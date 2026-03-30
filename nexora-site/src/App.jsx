import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  ChevronRight,
  CircleHelp,
  CreditCard,
  Download,
  FileText,
  History,
  LayoutDashboard,
  Lock,
  Menu,
  PiggyBank,
  Repeat,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Trash2,
  Wallet,
  X,
  BarChart3,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const navLinks = [
  { label: "Funciones", href: "#features" },
  { label: "Vista", href: "#showcase" },
  { label: "Detalles", href: "#details" },
  { label: "FAQ", href: "#faq" },
];

const features = [
  {
    icon: Wallet,
    title: "Registro rápido de gastos e ingresos",
    description:
      "Captura movimientos en segundos con una experiencia limpia, rápida y pensada para uso diario.",
  },
  {
    icon: CreditCard,
    title: "Control total de deudas",
    description:
      "Sigue pagos pendientes, avances y montos restantes sin depender de notas sueltas.",
  },
  {
    icon: Repeat,
    title: "Pagos recurrentes",
    description:
      "Organiza suscripciones, servicios y compromisos mensuales con una vista clara.",
  },
  {
    icon: Bell,
    title: "Recordatorios útiles",
    description:
      "Recibe alertas oportunas antes de que un pago se convierta en un problema.",
  },
  {
    icon: History,
    title: "Historial detallado",
    description:
      "Revisa movimientos pasados y entiende mejor tus patrones financieros.",
  },
  {
    icon: Download,
    title: "Exportación de datos",
    description:
      "Extrae tu información cuando necesites respaldo, control o análisis adicional.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidad y soporte",
    description:
      "Acceso visible a privacidad, términos, soporte y acciones importantes de cuenta.",
  },
  {
    icon: Smartphone,
    title: "Diseñada para iPhone",
    description:
      "Interfaz responsiva, ligera y cómoda tanto en escritorio como en celular.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Menos fricción",
    text: "Todo está pensado para registrar y consultar rápido, sin pasos innecesarios.",
  },
  {
    icon: BarChart3,
    title: "Más claridad",
    text: "Los datos se muestran con jerarquía visual simple y fácil de entender.",
  },
  {
    icon: Clock3,
    title: "Mejor constancia",
    text: "Recordatorios y pagos recurrentes ayudan a mantener orden real en el tiempo.",
  },
];

const faqItems = [
  {
    q: "¿Qué hace diferente a Nexora?",
    a: "Se enfoca en lo que sí importa: registrar gastos, controlar deudas, seguir pagos recurrentes y mantener una vista clara de tu actividad financiera.",
  },
  {
    q: "¿Está pensada para usar todos los días?",
    a: "Sí. La propuesta principal de Nexora es que usarla tome segundos, no minutos.",
  },
  {
    q: "¿Puedo revisar mi historial fácilmente?",
    a: "Sí. La app incluye vistas detalladas para revisar movimientos y entender mejor lo que ha pasado con tu dinero.",
  },
  {
    q: "¿Incluye control de cuenta y privacidad?",
    a: "Sí. La experiencia contempla soporte, política de privacidad, términos y gestión de cuenta desde la propia app.",
  },
];

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-black/90"
      : "border border-black/10 bg-white text-black hover:bg-zinc-50";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[2rem] border border-black/10 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function AppLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white shadow-sm">
        <PiggyBank className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold tracking-tight text-black">Nexora</p>
        <p className="text-xs text-black/45">Control financiero simple</p>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="mb-3 inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/60 shadow-sm">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-black/65 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 z-50 h-full w-[300px] bg-white p-6 shadow-2xl md:hidden"
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <AppLogo />
              <button
                onClick={onClose}
                className="rounded-2xl border border-black/10 p-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="rounded-2xl border border-black/10 px-4 py-3 text-sm text-black/75 transition hover:bg-zinc-50 hover:text-black"
                >
                  {item.label}
                </a>
              ))}

              <Button className="mt-2">
                Descargar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <AppLogo />

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-black/65 transition hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="secondary">Ver soporte</Button>
            <Button>
              Descargar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-2xl border border-black/10 p-2 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function HeroPhone() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] rounded-[2.8rem] border border-black/10 bg-black p-3 shadow-[0_30px_90px_rgba(0,0,0,0.16)]">
      <div className="rounded-[2.2rem] bg-zinc-50 p-4">
        <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-black/10" />

        <div className="space-y-4">
          <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Resumen
                </p>
                <h3 className="mt-1 text-xl font-semibold text-black">Este mes</h3>
              </div>
              <div className="rounded-2xl bg-black px-3 py-2 text-sm font-semibold text-white">
                Nexora
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-zinc-100 p-3">
                <p className="text-xs text-black/50">Gastos</p>
                <p className="mt-1 text-lg font-semibold">$ 420</p>
              </div>
              <div className="rounded-2xl bg-zinc-100 p-3">
                <p className="text-xs text-black/50">Pendiente</p>
                <p className="mt-1 text-lg font-semibold">$ 180</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-medium text-black">Movimientos recientes</p>
              <ChevronRight className="h-4 w-4 text-black/40" />
            </div>

            <div className="space-y-3">
              {[
                ["Supermercado", "- $ 48", "Hoy"],
                ["Internet", "- $ 25", "Mañana"],
                ["Pago de deuda", "- $ 60", "Lunes"],
              ].map((item) => (
                <div
                  key={item[0]}
                  className="flex items-center justify-between rounded-2xl bg-zinc-100 px-3 py-3"
                >
                  <div>
                    <p className="font-medium text-black">{item[0]}</p>
                    <p className="text-sm text-black/45">{item[2]}</p>
                  </div>
                  <p className="font-semibold text-black">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-black p-4 text-white">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5" />
              <div>
                <p className="font-medium">Pago recurrente pronto</p>
                <p className="text-sm text-white/70">
                  Tu suscripción vence en 2 días
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniPhone({ title, lines }) {
  return (
    <div className="w-full max-w-[220px] rounded-[2.4rem] border border-black/10 bg-black p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.14)]">
      <div className="rounded-[1.9rem] bg-zinc-50 p-3">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-black/10" />
        <div className="rounded-3xl bg-zinc-100 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-black/45">Nexora</p>
          <h4 className="mt-2 text-lg font-semibold text-black">{title}</h4>
          <div className="mt-4 space-y-2">
            {lines.map((line) => (
              <div
                key={line}
                className="rounded-2xl bg-white px-3 py-2 text-sm text-black/70 ring-1 ring-black/5"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card className="h-full transition hover:-translate-y-1 hover:shadow-lg">
      <div className="p-6">
        <div className="mb-5 inline-flex rounded-2xl border border-black/10 bg-black px-3 py-3 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="mt-3 leading-7 text-black/65">{description}</p>
      </div>
    </Card>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-black/10 bg-white/90 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
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
    <div className="min-h-screen bg-white text-black">
      <NavBar />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.07),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_32%)]" />

          <Container className="grid gap-14 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative z-10"
            >

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-7xl">
                La forma más clara de mostrar todo lo que hace Nexora.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 sm:text-lg lg:text-xl">
                Una landing page moderna para una app de finanzas personales que sí
                se entiende rápido. Presenta gastos, deudas, pagos recurrentes,
                historial, privacidad y control de cuenta con una vista elegante en
                desktop y en celular.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button>
                  Descargar en App Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="secondary" href="#features">
                  Ver funciones
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Simple", "Interfaz limpia y directa"],
                  ["Útil", "Gastos, deudas y pagos en orden"],
                  ["Confiable", "Privacidad y control visibles"],
                ].map(([title, body]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-black/10 bg-white p-4 shadow-sm"
                  >
                    <p className="font-semibold text-black">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-black/60">{body}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="relative z-10 flex items-center justify-center"
            >
              <div className="relative w-full max-w-[680px]">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 blur-3xl" />
                <div className="relative flex items-end justify-center gap-4 sm:gap-6">
                  <div className="hidden sm:block">
                    <MiniPhone
                      title="Deudas"
                      lines={["Pendiente actual", "Pago realizado", "Siguiente vencimiento"]}
                    />
                  </div>

                  <HeroPhone />

                  <div className="hidden sm:block">
                    <MiniPhone
                      title="Pagos"
                      lines={["Recordatorio activo", "Mensualidades", "Exportación lista"]}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        <section className="border-y border-black/5 bg-zinc-50">
          <Container className="grid gap-4 py-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Gastos", "Registro rápido"],
              ["Deudas", "Control claro"],
              ["Recurrentes", "Alertas útiles"],
              ["Historial", "Revisión simple"],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="rounded-3xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5"
              >
                <p className="text-sm font-semibold text-black">{title}</p>
                <p className="mt-1 text-sm text-black/55">{subtitle}</p>
              </div>
            ))}
          </Container>
        </section>

        <section id="features">
          <Container className="py-20 lg:py-24">
            <SectionTitle
              eyebrow="Funciones"
              title="Todo lo importante, explicado con una vista simple y premium."
              description="La página está estructurada para vender la idea rápido: qué hace Nexora, por qué importa y cómo se ve en una experiencia real de producto."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section id="showcase" className="bg-zinc-50">
          <Container className="py-20 lg:py-24">
            <SectionTitle
              eyebrow="Versión celular y desktop"
              title="Una landing que se siente sólida en monitor y en pantalla pequeña."
              description="La versión 2 mejora la jerarquía visual, el comportamiento responsivo y la navegación móvil. No es solo una web bonita; está pensada para convertir mejor y verse bien en cualquier tamaño."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card>
                <div className="p-6 sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-black p-3 text-white">
                      <LayoutDashboard className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        Experiencia visual más profesional
                      </h3>
                      <p className="text-sm text-black/55">
                        Mejor separación de bloques, más aire y más foco.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {pillars.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-3xl bg-zinc-50 p-5 ring-1 ring-black/5"
                      >
                        <div className="inline-flex rounded-2xl bg-white p-3 ring-1 ring-black/5">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <h4 className="mt-4 text-lg font-semibold text-black">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-black/65">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="bg-black text-white">
                <div className="p-6 sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-white p-3 text-black">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">
                        Mobile first de verdad
                      </h3>
                      <p className="text-sm text-white/60">
                        Menú lateral, CTA fijo y bloques adaptados.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Menú móvil con panel lateral",
                      "CTA fijo en la parte inferior",
                      "Mockups que se apilan bien en celular",
                      "Espaciado optimizado para pantallas pequeñas",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </section>

        <section id="details">
          <Container className="py-20 lg:py-24">
            <SectionTitle
              eyebrow="Detalles"
              title="Una página que explica bien el producto sin volverlo pesado."
              description="Cada bloque tiene un trabajo claro: atraer, explicar, demostrar confianza y empujar a la descarga. Esa estructura te sirve tanto para publicar como para presentar Nexora a usuarios, testers o revisión de App Store."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              <Card className="bg-black text-white">
                <div className="p-7 sm:p-8">
                  <div className="inline-flex rounded-2xl bg-white/10 p-3">
                    <Repeat className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-3xl font-semibold">
                    Pagos recurrentes y recordatorios
                  </h3>
                  <p className="mt-4 leading-7 text-white/75">
                    Una de las piezas más fuertes de Nexora es ayudarte a mantener
                    constancia. La landing resalta esa propuesta para que el
                    visitante entienda rápido que la app no solo registra, también
                    ayuda a sostener orden con el tiempo.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Alertas antes del vencimiento",
                      "Seguimiento de compromisos mensuales",
                      "Menos olvidos",
                      "Más control sobre pendientes",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: FileText,
                    title: "Historial claro",
                    body: "La landing comunica revisión simple y contexto rápido para entender movimientos pasados.",
                  },
                  {
                    icon: Download,
                    title: "Exportación",
                    body: "Se destaca la posibilidad de sacar datos y mantener respaldo cuando el usuario lo necesite.",
                  },
                  {
                    icon: Lock,
                    title: "Privacidad",
                    body: "El sitio deja visible que Nexora trata con seriedad los puntos de soporte y documentación legal.",
                  },
                  {
                    icon: Trash2,
                    title: "Borrado de cuenta",
                    body: "Se comunica control real del usuario, algo importante para confianza y compliance.",
                  },
                ].map((item) => (
                  <Card key={item.title}>
                    <div className="p-6">
                      <div className="inline-flex rounded-2xl bg-zinc-100 p-3 ring-1 ring-black/5">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-black">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-black/65">{item.body}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-zinc-50">
          <Container className="py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionTitle
                eyebrow="Confianza"
                title="Privacidad, soporte y control del usuario bien visibles."
                description="En una app financiera, esconder esa información es un error. La página deja claro que Nexora también cuida esa parte del producto."
              />

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Política de privacidad",
                    text: "Espacio ideal para enlazar tu página legal pública y reforzar confianza.",
                  },
                  {
                    icon: FileText,
                    title: "Términos y soporte",
                    text: "Perfecto para dirigir al usuario a contacto, ayuda y documentación base.",
                  },
                  {
                    icon: Trash2,
                    title: "Borrado de cuenta",
                    text: "Comunica que la app permite acciones importantes sin vueltas innecesarias.",
                  },
                  {
                    icon: Lock,
                    title: "Gestión de perfil",
                    text: "Refuerza que la cuenta y la configuración están bajo control del usuario.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <Card className="h-full">
                      <div className="p-6">
                        <div className="inline-flex rounded-2xl border border-black/10 bg-zinc-100 p-3">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-black">
                          {item.title}
                        </h3>
                        <p className="mt-3 leading-7 text-black/65">{item.text}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-black text-white">
          <Container className="py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Nexora
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  Una landing más seria para un producto que quiere verse listo.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  Esta versión 2 sube el nivel visual, mejora la adaptación móvil y
                  deja una base mucho más sólida para conectar tu App Store link,
                  soporte, privacidad y capturas reales de producto.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button className="bg-white text-black hover:bg-white/90">
                    Probar Nexora
                  </Button>
                  <Button
                    variant="secondary"
                    className="border-white/20 bg-transparent text-white hover:bg-white/10"
                    href="#details"
                  >
                    Ver detalles
                  </Button>
                </div>
              </div>

              <Card className="border-white/10 bg-white/5 text-white shadow-none">
                <div className="p-8">
                  <div className="space-y-4">
                    {[
                      ["Hero más fuerte", "Mensaje más claro y visual más premium"],
                      ["Responsive real", "Mejor comportamiento en celular"],
                      ["Secciones útiles", "Funciones, detalles, confianza y FAQ"],
                      ["Lista para conectar", "App Store, soporte, privacidad y screenshots"],
                    ].map(([title, desc]) => (
                      <div
                        key={title}
                        className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="mt-0.5 rounded-full bg-white p-1.5 text-black">
                          <BadgeCheck className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{title}</p>
                          <p className="mt-1 text-sm leading-6 text-white/65">
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </section>

        <section id="faq">
          <Container className="py-20 lg:py-24">
            <SectionTitle
              eyebrow="FAQ"
              title="Preguntas frecuentes"
              description="La página también necesita resolver dudas sin meter bloques pesados de texto."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <Card className="h-full">
                    <div className="p-6">
                      <div className="mb-3 inline-flex rounded-2xl bg-zinc-100 p-3 ring-1 ring-black/5">
                        <CircleHelp className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-black">{item.q}</h3>
                      <p className="mt-3 leading-7 text-black/65">{item.a}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-zinc-50 pb-24 md:pb-0">
        <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-black">Nexora</p>
            <p className="mt-1 text-sm text-black/55">
              Finanzas personales simples, claras y útiles.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-black/55">
            <a href="#features" className="transition hover:text-black">
              Funciones
            </a>
            <a href="#showcase" className="transition hover:text-black">
              Vista
            </a>
            <a href="#faq" className="transition hover:text-black">
              FAQ
            </a>
            <a href="#" className="transition hover:text-black">
              Soporte
            </a>
          </div>
        </Container>
      </footer>

      <StickyMobileCTA />
    </div>
  );
}