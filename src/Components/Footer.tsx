import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
          <div className="flex items-start gap-4">
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/logo.svg"
                alt="Logo de Nexora"
                width={52}
                height={52}
                className="h-12 w-12 rounded-2xl"
              />
            </div>

            <div>
              <p className="text-lg font-semibold text-white">Nexora</p>
              <p className="mt-1 max-w-md text-sm leading-6 text-white/60">
                Finanzas personales con una experiencia visual más clara,
                moderna y enfocada.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:items-center lg:gap-5">
            <a href="#funciones" className="text-sm text-white/65 hover:text-white">
              Funciones
            </a>
            <a href="#screenshots" className="text-sm text-white/65 hover:text-white">
              Pantallas
            </a>
            <a href="#beneficios" className="text-sm text-white/65 hover:text-white">
              Beneficios
            </a>
            <a href="#lanzamiento" className="text-sm text-white/65 hover:text-white">
              Disponibilidad
            </a>
            <a href="#contacto" className="text-sm text-white/65 hover:text-white">
              Contacto
            </a>
            <a href="/privacy-policy" className="text-sm text-white/65 hover:text-white">
              Privacidad
            </a>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nexora. Todos los derechos reservados.</p>
          <p>Contacto: motwd44011@outlook.com</p>
        </div>
      </div>
    </footer>
  );
}