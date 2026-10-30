const useCases = [
  {
    title: 'AI-native operating models',
    desc: 'Design and deploy systems where AI agents are first-class participants, not bolted-on features.',
  },
  {
    title: 'Intelligent workflows',
    desc: 'Orchestrate complex business processes with stateful, distributed execution. Not fragile scripts.',
  },
  {
    title: 'Distributed agent systems',
    desc: 'Build multi-agent architectures with proper state boundaries, messaging, and deterministic behavior.',
  },
  {
    title: 'Modern business infrastructure',
    desc: 'Replace brittle integration layers with compiled systems that scale, evolve, and maintain consistency.',
  },
]

export default function ForEnterprises() {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-muted mb-4">For Businesses</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e6eaf2] mb-6 tracking-tight">
            Built for what comes next
          </h2>
          <p className="text-lg text-[#9aa3b2] max-w-2xl mx-auto mb-3">
            From a new idea to a complex business operation: describe what you need, and N5 creates
            the system that runs it.
          </p>
          <p className="text-lg text-[#9aa3b2] max-w-2xl mx-auto">
            N5 is not a coding copilot, an AI wrapper, or a low-code platform.
          </p>
          <p className="text-lg text-gold font-medium max-w-2xl mx-auto mt-3">
            It is the infrastructure for how AI-native businesses are built.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 -mt-6">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="p-8 rounded-2xl border border-border bg-surface/50 hover:border-border transition-all">
              <h3 className="text-lg font-semibold text-[#e6eaf2] mb-3">{title}</h3>
              <p className="text-[#9aa3b2] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* What we are NOT */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {['Coding copilot', 'AI agent wrapper', 'Workflow tool', 'Low-code platform'].map((item) => (
            <div key={item} className="p-5 rounded-xl border border-gold/20 bg-gold/[0.03]">
              <span className="text-xs text-gold/70 font-mono uppercase tracking-wider font-medium">Not a</span>
              <p className="text-sm text-[#e6eaf2] mt-1.5 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
