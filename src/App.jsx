import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Playground from './pages/Playground'
import Contact from './pages/Contact'
import FlameBackground from './components/FlameBackground'
import FireParticles from './components/FireParticles'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <FlameBackground />
      <FireParticles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
