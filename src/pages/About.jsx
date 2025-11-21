import PageShell from '../components/PageShell'

export default function About() {
  return (
    <PageShell>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-extrabold">About Me</h1>
          <p className="mt-4 text-orange-100/85 max-w-3xl">
            I craft visually compelling, animated user interfaces with a strong fire-driven identity. My approach combines design sensibility with solid engineering to create fast, expressive sites and apps.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { t: 'Design Systems', d: 'Cohesive palettes, spacing, and motion that communicate brand energy.' },
              { t: 'Motion & 3D', d: 'Micro-interactions, Framer Motion, and Spline/WebGL scenes.' },
              { t: 'Frontend Engineering', d: 'Robust architectures, performance budgets, accessible patterns.' }
            ].map((c, i) => (
              <div key={i} className="relative rounded-xl p-6 bg-white/5 ring-1 ring-white/10">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.12),transparent_40%)]" />
                <h3 className="font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-orange-100/80">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
