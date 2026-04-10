export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
        >
          ← Volver al inicio
        </a>

        <div className="mt-8">
          <span className="eyebrow">Privacidad</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-4 text-white/70">
            Última actualización: abril 2026
          </p>
        </div>

        <div className="prose-block mt-10 space-y-8">
          <section>
            <h2>1. Información general</h2>
            <p>
              Nexora es una aplicación orientada a la organización financiera
              personal. Esta política describe el tratamiento general de la
              información registrada por el usuario dentro de la app.
            </p>
          </section>

          <section>
            <h2>2. Información registrada</h2>
            <p>
              La aplicación puede almacenar información como ingresos, gastos,
              transferencias entre cuentas, deudas, pagos fijos, categorías,
              fechas y notas asociadas al uso personal de la herramienta.
            </p>
          </section>

          <section>
            <h2>3. Finalidad del uso</h2>
            <p>La información registrada se utiliza para:</p>
            <ul>
              <li>mostrar resúmenes y balances financieros;</li>
              <li>organizar historial y estadísticas dentro de la app;</li>
              <li>facilitar el seguimiento de pagos y compromisos mensuales;</li>
              <li>mejorar la experiencia general del producto.</li>
            </ul>
          </section>

          <section>
            <h2>4. Almacenamiento y seguridad</h2>
            <p>
              Nexora puede utilizar almacenamiento local del dispositivo y otras
              medidas de protección disponibles en iOS. Las funciones de
              seguridad del dispositivo contribuyen a restringir el acceso no
              autorizado a la app.
            </p>
          </section>

          <section>
            <h2>5. Compartición de datos</h2>
            <p>
              Nexora no vende información personal del usuario. Cualquier
              integración futura con servicios de terceros será comunicada en
              esta política en caso de ser aplicable.
            </p>
          </section>

          <section>
            <h2>6. Control del usuario</h2>
            <p>
              El usuario puede dejar de utilizar la aplicación en cualquier
              momento y eliminar la información almacenada según las funciones
              disponibles en el producto o mediante la desinstalación de la app.
            </p>
          </section>

          <section>
            <h2>7. Actualizaciones</h2>
            <p>
              Esta política puede modificarse para reflejar nuevas funciones,
              mejoras del producto o cambios normativos. La fecha de actualización
              aparecerá siempre al inicio de esta página.
            </p>
          </section>

          <section>
            <h2>8. Contacto</h2>
            <p>Para consultas relacionadas con privacidad o uso de la app:</p>
            <p>motwd44011@outlook.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}