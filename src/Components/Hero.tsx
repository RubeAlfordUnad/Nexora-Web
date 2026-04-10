import Image from "next/image";

export function Hero() {
  return (
    <section className="px-4 pb-4 pt-6 sm:px-6 sm:pb-6 sm:pt-8 lg:pb-8 lg:pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="fade-up mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="max-w-[340px] text-5xl font-semibold tracking-[-0.06em] text-white sm:max-w-[620px] sm:text-6xl lg:max-w-[860px] lg:text-7xl xl:text-[7rem] xl:leading-[0.9]">
            Controla tu dinero
            <span className="block text-white/62">
              con menos ruido y más contexto.
            </span>
          </h1>

          <p className="mt-5 max-w-[320px] text-base leading-7 text-white/72 sm:max-w-[640px] sm:text-lg lg:max-w-[760px]">
            Nexora reúne ingresos, gastos, historial, deudas, pagos fijos y
            transferencias en una experiencia mucho más clara para leer el mes
            sin perder tiempo.
          </p>
        </div>

        <div className="relative mx-auto mt-8 flex max-w-[960px] justify-center sm:mt-10 lg:mt-12">
          <div className="absolute left-1/2 top-[10%] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(25,230,93,0.24),_transparent_62%)] blur-3xl sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]" />

          <div className="phone-frame float-soft relative z-10 w-full max-w-[260px] sm:max-w-[310px] md:max-w-[340px] lg:max-w-[390px] xl:max-w-[420px]">
            <Image
              src="/screenshots/dashboard.jpeg"
              alt="Pantalla principal de Nexora"
              width={460}
              height={920}
              className="h-auto w-full rounded-[2rem] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}