"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Funciones", href: "#funciones" },
  { label: "Pantallas", href: "#screenshots" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Disponibilidad", href: "#lanzamiento" },
  { label: "Contacto", href: "#contacto" },
  { label: "Preguntas frecuentes", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="flex min-w-0 items-center gap-3"
          onClick={closeMenu}
        >
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src="/logo.svg"
              alt="Logo de Nexora"
              width={44}
              height={44}
              className="h-10 w-10 rounded-2xl sm:h-11 sm:w-11"
              priority
            />
          </div>

          <div className="min-w-0">
            <p className="text-xs text-white/50 sm:text-sm">
              Finanzas personales
            </p>
            <p className="truncate text-base font-semibold tracking-tight text-white sm:text-lg">
              Nexora
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#lanzamiento" className="btn-secondary hidden lg:inline-flex">
          Descarga próximamente
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#070707]/95 px-4 py-5 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/82 transition hover:bg-white/[0.08]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-[#19e65d]/15 bg-[#19e65d]/10 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#58f089]">
                Nexora
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                Descarga próximamente
              </p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Conoce las funciones clave, revisa las pantallas y ponte en
                contacto para recibir información.
              </p>

              <a
                href="#lanzamiento"
                onClick={closeMenu}
                className="btn-primary mt-4 w-full"
              >
                Ver disponibilidad
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}