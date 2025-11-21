import Navbar from './Navbar'

export default function PageShell({ children }) {
  return (
    <div className="relative min-h-screen text-orange-100">
      <Navbar />
      <main className="pt-16">{children}</main>
      <footer className="border-t border-white/10 mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-orange-200/70">
          © {new Date().getFullYear()} Firefolio — Fueled by creativity
        </div>
      </footer>
    </div>
  )
}
