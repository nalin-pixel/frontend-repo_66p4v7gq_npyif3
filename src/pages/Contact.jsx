import PageShell from '../components/PageShell'

export default function Contact() {
  return (
    <PageShell>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-extrabold">Get In Touch</h1>
          <p className="mt-3 text-orange-100/85 max-w-2xl">Have a project in mind or want to collaborate? Drop a message.</p>

          <form className="mt-10 grid gap-4 max-w-xl">
            <input className="px-4 py-3 rounded-md bg-white/5 ring-1 ring-white/10 placeholder:text-orange-200/60 focus:outline-none focus:ring-orange-400/40" placeholder="Name"/>
            <input type="email" className="px-4 py-3 rounded-md bg-white/5 ring-1 ring-white/10 placeholder:text-orange-200/60 focus:outline-none focus:ring-orange-400/40" placeholder="Email"/>
            <textarea rows={5} className="px-4 py-3 rounded-md bg-white/5 ring-1 ring-white/10 placeholder:text-orange-200/60 focus:outline-none focus:ring-orange-400/40" placeholder="Message"/>
            <button type="button" className="mt-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-[0_8px_30px_rgba(251,146,60,0.5)] hover:brightness-110 transition">Send</button>
          </form>
        </div>
      </section>
    </PageShell>
  )
}
