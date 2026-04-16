const principles = [
  'Stateful Systems',
  'Distributed Data Models',
  'Message-Passing Architecture',
  'Deterministic Execution',
  'Exactly-Once Processing',
  'Partitioned Scalability',
  'Recipe-Driven Construction',
]

export default function Credibility() {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-mono tracking-widest uppercase text-muted mb-4">Under the Hood</p>
            <h2 className="text-3xl font-bold text-[#e6eaf2] mb-6 tracking-tight">
              Not a dev tool.<br />
              An execution substrate.
            </h2>
            <p className="text-[#9aa3b2] leading-relaxed mb-8">
              Rumi is a purpose-built runtime for enterprise systems. Sutra and{' '}
              <a
                href="https://www.rumi.systems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5aadb1] underline underline-offset-4 decoration-[#5aadb1]/40 hover:decoration-[#5aadb1] transition-colors"
              >
                Rumi
              </a>{' '}
              together encode system patterns, not just syntax, and produce complete systems, not fragments of code.
            </p>
            <div className="p-6 rounded-xl border border-border bg-surface/50">
              <p className="text-sm text-muted mb-1 font-mono">The relationship</p>
              <p className="text-[#9aa3b2] text-sm leading-relaxed">
                Enterprise intent defines what needs to be built.{' '}
                <span className="text-[#7b93cc]">Sutra</span> structures the system.{' '}
                <span className="text-[#5aadb1]">Rumi</span> runs it.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-muted mb-6">Core Principles</p>
            <div className="space-y-3">
              {principles.map((p) => (
                <div key={p}
                  className="flex items-center gap-3 p-3.5 rounded-lg border border-border bg-surface/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 flex-shrink-0" />
                  <span className="text-sm text-[#e6eaf2]/80">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
