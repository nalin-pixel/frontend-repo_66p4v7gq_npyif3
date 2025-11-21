import PageShell from '../components/PageShell'

export default function Projects() {
  return (
    <PageShell>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-extrabold">Projects</h1>
          <p className="mt-3 text-orange-100/85">Selected work focused on motion, interactivity, and expressive visuals.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[1,2,3,4].map(i => (
              <article key={i} className="group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                <div className="aspect-video bg-gradient-to-br from-orange-600/40 to-amber-500/40" />
                <div className="p-6">
                  <h3 className="font-semibold">Cinder Project {i}</h3>
                  <p className="text-sm text-orange-100/80">A kinetic interface exploring fiery motion and bold contrast.</p>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.2),transparent_40%)]" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
