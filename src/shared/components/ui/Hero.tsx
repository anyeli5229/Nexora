
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-155 items-center justify-center overflow-hidden bg-hero bg-cover bg-center px-5 py-20 md:min-h-175">

      {/* Oscurecer la imagen de fondo */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Degradado para mejorar la lectura */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">

        <h1 className="text-5xl font-black italic tracking-tighter text-white sm:text-6xl lg:text-7xl">
          Encuentra tu
          <span className="mt-1 block text-gradient">
            espacio.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
          Descubre eventos, conoce personas y forma parte
          de comunidades que comparten tus intereses.
        </p>

        {/* Botón principal */}
        <Link
          href="/events"
          className="btn-gradient btn-effect mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white"
        >
          Obtener una cuenta
        </Link>

        {/* Accesos inferiores */}
        <div className="mt-16 flex items-center justify-center gap-6 sm:gap-12">

          <Link
            href="/events"
            className="flex items-center gap-2 text-xs font-medium text-white/80 transition-colors hover:text-fuchsia-400"
          >
            <span className="text-lg text-fuchsia-400">▦</span>
            Eventos
          </Link>

          <Link
            href="/communities"
            className="flex items-center gap-2 text-xs font-medium text-white/80 transition-colors hover:text-cyan-400"
          >
            <span className="text-lg text-cyan-400">♧</span>
            Comunidades
          </Link>

          <Link
            href="/connections"
            className="flex items-center gap-2 text-xs font-medium text-white/80 transition-colors hover:text-violet-400"
          >
            <span className="text-lg text-violet-400">ϟ</span>
            Conexiones
          </Link>

        </div>
      </div>
    </section>
  )
}