const concerns = [
  { label: 'Distributed Behavior', icon: '⟐' },
  { label: 'State Management', icon: '⊡' },
  { label: 'Interaction Patterns', icon: '⟁' },
  { label: 'Data Models', icon: '⊞' },
  { label: 'Messaging', icon: '⟿' },
  { label: 'Orchestration', icon: '⊛' },
  { label: 'Scale', icon: '⟐' },
  { label: 'Evolution', icon: '⟳' },
]

export default function WhyCodeIsNotEnough() {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-mono tracking-widest uppercase text-muted mb-4">The Insight</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#e6eaf2] mb-6 tracking-tight">
          Code Is Not the System<br />
          <span className="text-[#9aa3b2]"><span className="text-gold">Architecture</span> Makes It One</span>
        </h2>

        <p className="text-lg text-[#9aa3b2] mb-16">
          A system needs behavior, state, and interactions that code alone cannot define.
        </p>

        <p className="text-sm text-muted font-mono uppercase tracking-widest mb-6">Real systems require:</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {concerns.map(({ label, icon }) => (
            <div key={label}
              className="group p-5 rounded-xl border border-border bg-surface/50 hover:border-border transition-all">
              <span className="text-2xl text-[#9aa3b2]/40 group-hover:text-gold/60 transition-colors block mb-3 font-mono">
                {icon}
              </span>
              <span className="text-sm text-[#e6eaf2]/80 font-medium">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-border bg-surface/30 text-center">
          <p className="text-lg text-[#9aa3b2]">
            Better code. The same system design bottleneck.
          </p>
          <p className="text-xl text-[#e6eaf2] mt-3 font-medium">
            The real problem is not code generation. It is <span className="text-gold">system creation</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
