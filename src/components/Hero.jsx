import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fRn7FqMm62bDS630/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays for fire look */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <div className="absolute -inset-x-10 -top-20 h-72 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.35),transparent_60%)]" />
        <div className="absolute -inset-x-10 -bottom-20 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.35),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-orange-200 ring-1 ring-white/20">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Igniting ideas into experiences
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_0_20px_rgba(251,146,60,0.25)]">
            A blazing portfolio that burns bright
          </h1>
          <p className="mt-4 text-lg text-orange-100/90">
            Energetic design, smooth animations, and a fiery personality. Explore projects, skills, and an interactive Python playground.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-[0_8px_30px_rgba(251,146,60,0.5)] hover:brightness-110 transition">View Projects</a>
            <a href="#about" className="px-5 py-2.5 rounded-md bg-white/10 text-orange-100 ring-1 ring-white/10 hover:bg-white/15 transition">About Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}
