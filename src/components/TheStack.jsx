const layers = [
  {
    id: 'intent',
    label: 'Intent Layer',
    tagline: 'Describe the enterprise',
    color: 'intent',
    description: 'Enterprise intent emerges from business analysis, consulting workflows, or system discovery platforms. It captures processes, constraints, roles, inefficiencies, and opportunities as ambiguous, human-readable input.',
    outputs: ['Processes & Workflows', 'Constraints & Rules', 'Roles & Responsibilities', 'Opportunities for AI & Systems'],
  },
  {
    id: 'sutra',
    label: 'Sutra',
    tagline: 'Design and Structure Systems',
    color: 'sutra',
    description: 'Sutra is our system design and compilation layer. It takes enterprise intent and refines it into structured system design through interactive dialogue. This is not code generation. It is system design through conversation.',
    outputs: ['Agents & Services', 'State Boundaries', 'Data Models & Schemas', 'Messaging & Interaction Flows', 'System Architecture'],
    href: 'https://sutra.n5corp.ai',
    linkLabel: 'Explore Sutra',
  },
  {
    id: 'rumi',
    label: 'Rumi',
    tagline: 'Run and Scale Systems',
    color: 'rumi',
    description: 'Rumi is our execution layer. It runs distributed, stateful systems in real time with enterprise-grade reliability. It handles state, messaging, scaling, consistency, and high performance.',
    outputs: ['Microservice Execution', 'Stateful Processing', 'Real-Time Messaging', 'Fault Tolerance & Reliability', 'Elastic Scale', 'High Performance'],
    href: 'https://rumi.systems',
    linkLabel: 'Explore Rumi',
  },
]

const colorMap = {
  intent: {
    border: 'border-[#c09b2d]/20',
    bg: 'bg-[#c09b2d]/[0.03]',
    tag: 'bg-[#c09b2d]/10 text-[#c09b2d] border-[#c09b2d]/20',
    text: 'text-[#c09b2d]',
    dot: 'bg-[#c09b2d]',
    pill: 'bg-[#c09b2d]/8 text-[#c09b2d]/80',
  },
  sutra: {
    border: 'border-[#3a4f8a]/30',
    bg: 'bg-[#233263]/[0.08]',
    tag: 'bg-[#233263]/20 text-[#7b93cc] border-[#3a4f8a]/30',
    text: 'text-[#7b93cc]',
    dot: 'bg-[#3a4f8a]',
    pill: 'bg-[#233263]/15 text-[#7b93cc]/80',
  },
  rumi: {
    border: 'border-[#2f6f73]/25',
    bg: 'bg-[#2f6f73]/[0.05]',
    tag: 'bg-[#2f6f73]/15 text-[#5aadb1] border-[#2f6f73]/25',
    text: 'text-[#5aadb1]',
    dot: 'bg-[#2f6f73]',
    pill: 'bg-[#2f6f73]/10 text-[#5aadb1]/80',
  },
}

export default function TheStack() {
  return (
    <section id="stack" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-muted mb-4">The N5 Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e6eaf2] mb-6 tracking-tight">
            Three Layers. One Architecture.
          </h2>
          <p className="text-lg text-[#9aa3b2] max-w-2xl mx-auto">
            From enterprise intent to running systems.<br />
            Each layer adds structure and brings the system closer to execution.
          </p>
        </div>

        <div className="space-y-6">
          {layers.map((layer, i) => {
            const c = colorMap[layer.color]
            return (
              <div key={layer.id}>
                <div className={`relative p-8 sm:p-10 rounded-2xl border ${c.border} ${c.bg}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-8">
                    <div className="flex-1">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wide uppercase border rounded-full mb-4 ${c.tag}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                        {layer.label}
                      </div>
                      <h3 className={`text-2xl font-semibold mb-3 ${c.text}`}>
                        {layer.tagline}
                      </h3>
                      <p className="text-[#9aa3b2] leading-relaxed">
                        {layer.description}
                      </p>
                      {layer.href && (
                        <a
                          href={layer.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block mt-5 text-sm font-medium ${c.text} opacity-80 hover:opacity-100 transition-opacity`}
                        >
                          {layer.linkLabel} &rarr;
                        </a>
                      )}
                    </div>
                    <div className="sm:w-56 flex-shrink-0">
                      <div className="space-y-2">
                        {layer.outputs.map((out) => (
                          <div key={out} className={`text-xs px-3 py-2 rounded-lg ${c.pill} font-medium`}>
                            {out}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {i < layers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <svg width="2" height="24" className="text-border">
                      <line x1="1" y1="0" x2="1" y2="24" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
