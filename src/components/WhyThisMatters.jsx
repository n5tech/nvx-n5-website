const benefits = [
  {
    title: 'Faster path to production',
    desc: 'Skip months of system design and plumbing. Move from intent to running systems.',
  },
  {
    title: 'Coherent architecture',
    desc: 'Systems are compiled from structured design, not stitched together from code fragments.',
  },
  {
    title: 'Scalable execution',
    desc: 'Rumi handles partitioning, state, and messaging at enterprise scale from day one.',
  },
  {
    title: 'Continuous evolution',
    desc: 'Systems evolve through intent refinement, not rewrites. Change the description and recompile the system.',
  },
]

export default function WhyThisMatters() {
  return (
    <section id="why" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-muted mb-4">Why This Matters</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e6eaf2] mb-6 tracking-tight">
            We do not generate code.<br />
            <span className="text-gold">We compile systems.</span>
          </h2>
          <p className="text-lg text-[#9aa3b2] max-w-2xl mx-auto">
            Building sophisticated software systems should not depend on engineering expertise or
            organizational resources. N5 makes system creation accessible through intent, with the
            architecture, performance, and reliability the most demanding applications require.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map(({ title, desc }) => (
            <div key={title}
              className="p-8 rounded-2xl border border-border bg-surface/50 hover:border-border transition-all">
              <h3 className="text-lg font-semibold text-[#e6eaf2] mb-3">{title}</h3>
              <p className="text-[#9aa3b2] leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
