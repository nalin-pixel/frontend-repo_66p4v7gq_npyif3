import { Link, NavLink } from 'react-router-dom'
import { Flame, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
      <Item to="/">Home</Item>
      <Item to="/about">About</Item>
      <Item to="/projects">Projects</Item>
      <Item to="/playground">Playground</Item>
      <Item to="/contact">Contact</Item>
    </div>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-orange-500/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-100">
            <Flame className="w-6 h-6 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
            <span className="font-semibold tracking-tight">Firefolio</span>
          </Link>

          <nav className="hidden sm:block">
            {navItem}
          </nav>

          <button aria-label="Menu" className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/5 text-orange-200 ring-1 ring-white/10" onClick={() => setOpen(!open)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="sm:hidden pb-4">
            {navItem}
          </div>
        )}
      </div>
    </header>
  )
}

function Item({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-orange-500/20 text-orange-200' : 'text-orange-100/80 hover:text-orange-100 hover:bg-white/5'}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {children}
    </NavLink>
  )
}
