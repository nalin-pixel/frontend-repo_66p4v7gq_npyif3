import Hero from '../components/Hero'
import PageShell from '../components/PageShell'

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <section id="about" className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold">About</h2>
              <p className="mt-4 text-orange-100/80">
                Passionate about crafting immersive, animated interfaces with strong aesthetics. I blend design and engineering to build experiences that feel alive.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl blur opacity-60" />
              <div className="relative rounded-xl bg-black/50 p-6 ring-1 ring-white/10">
                <ul className="space-y-3 text-sm">
                  <li>• Motion-first UI</li>
                  <li>• Creative coding</li>
                  <li>• WebGL & 3D integrations</li>
                  <li>• Frontend architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="group relative rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                <div className="aspect-video bg-gradient-to-br from-orange-600/40 to-amber-500/40" />
                <div className="p-5">
                  <h3 className="font-semibold">Project {i}</h3>
                  <p className="text-sm text-orange-100/80">High-impact UI with motion and polish.</p>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.2),transparent_40%)]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
