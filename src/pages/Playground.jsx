import { useEffect, useRef, useState } from 'react'
import PageShell from '../components/PageShell'

// Lightweight in-browser Python via Pyodide using a CDN
export default function Playground() {
  const [ready, setReady] = useState(false)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const pyodideRef = useRef(null)
  const editorRef = useRef(null)

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        // Load pyodide from CDN
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
        script.onload = async () => {
          // @ts-ignore
          const pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/' })
          if (!mounted) return
          pyodideRef.current = pyodide
          setReady(true)
        }
        document.body.appendChild(script)
      } catch (e) {
        setError(String(e))
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  const runCode = async () => {
    setError('')
    setOutput('')
    if (!pyodideRef.current) return
    const code = editorRef.current?.value || ''
    try {
      const result = await pyodideRef.current.runPythonAsync(code)
      setOutput(prev => prev + (result !== undefined ? String(result) : ''))
    } catch (e) {
      setError(String(e))
    }
  }

  return (
    <PageShell>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-extrabold">Python Playground</h1>
          <p className="mt-3 text-orange-100/85">Type and run Python directly in your browser. No setup required.</p>

          <div className="mt-8 grid gap-6">
            <div className="relative rounded-xl ring-1 ring-white/10 bg-black/50 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.12),transparent_40%)]" />
              <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                <span className="text-xs text-orange-200/80">editor.py</span>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs ${ready ? 'bg-emerald-500/20 text-emerald-300' : 'bg-orange-500/20 text-orange-200'}`}>{ready ? 'Ready' : 'Loading Pyodide...'}</span>
                  <button onClick={runCode} disabled={!ready} className="px-3 py-1.5 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium disabled:opacity-50">Run ▸</button>
                </div>
              </div>

              <textarea
                ref={editorRef}
                spellCheck={false}
                className="block w-full min-h-[280px] font-mono text-sm p-4 bg-transparent text-orange-100 outline-none caret-orange-300"
                placeholder={`# Python in the browser\n# Try: Fibonacci, list comprehensions, etc.\n\nimport sys\nprint('Hello from Pyodide', sys.version)\n\n# Return values appear above the output panel if not printed\n[ x*x for x in range(5) ]`}
              />

              <div className="border-t border-white/10 p-4 bg-black/40">
                <div className="text-xs uppercase tracking-wide text-orange-200/70 mb-2">Output</div>
                <pre className="whitespace-pre-wrap text-sm text-orange-100/90 min-h-[60px]">{output}</pre>
                {error && (
                  <div className="mt-3 text-sm text-red-300/90">{error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
