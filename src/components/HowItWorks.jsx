const steps = [
  {
    num: '01',
    title: 'Describe Your Intent',
    desc: 'Capture processes, constraints, roles, and opportunities in natural language. No formal specification required.',
  },
  {
    num: '02',
    title: 'Refine in Sutra',
    desc: 'Through interactive dialogue, Sutra structures intent into agents, state boundaries, data models, and messaging flows.',
  },
  {
    num: '03',
    title: 'Compile the System',
    desc: 'Sutra compiles structured design into coherent system definitions. Not code fragments, but complete system architecture.',
  },
  {
    num: '04',
    title: 'Run on Rumi',
    desc: 'Rumi executes the system with distributed state, exactly-once processing, and enterprise-grade reliability.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-muted mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e6eaf2] mb-6 tracking-tight">
            From Intent to Execution
          </h2>
          <p className="text-lg text-[#9aa3b2] max-w-2xl mx-auto">
            Four steps. No hand-written plumbing. No architecture guesswork.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-border via-border/50 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-8 items-start">
                <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-surface border border-border flex items-center justify-center">
                  <span className="text-sm font-mono text-gold/70 font-medium">{num}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-[#e6eaf2] mb-2">{title}</h3>
                  <p className="text-[#9aa3b2] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
