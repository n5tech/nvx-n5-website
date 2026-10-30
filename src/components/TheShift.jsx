export default function TheShift() {
  return (
    <section id="shift" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-mono tracking-widest uppercase text-muted mb-4">The Shift</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#e6eaf2] mb-6 tracking-tight">
          Code Was the First Step<br />
          <span className="text-[#9aa3b2]"><span className="text-gold">Systems</span> Are What Matter</span>
        </h2>

        <p className="text-lg text-[#9aa3b2] mb-16">
          How systems are created is changing.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Old Way */}
          <div className="relative p-6 rounded-2xl border border-border bg-surface/50">
            <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-mono tracking-wide uppercase bg-surface border border-border rounded-full text-[#b3bac6]">
              Yesterday
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Step label="Requirements" />
              <Arrow />
              <Step label="Code" />
              <Arrow />
              <Step label="Systems" />
            </div>
            <p className="mt-6 text-[13px] text-[#b3bac6] leading-loose">
              AI has learned to write code.<br />
              But systems still have to be designed and put together manually.
            </p>
          </div>

          {/* New Way */}
          <div className="relative p-6 rounded-2xl border border-gold/20 bg-gold/[0.03]">
            <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-mono tracking-wide uppercase bg-accent border border-accent-light/30 rounded-full text-[#e6eaf2]">
              N5
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Step label="Intent" active />
              <Arrow active />
              <Step label="Design" active />
              <Arrow active />
              <Step label="Compile" active />
              <Arrow active />
              <Step label="Execute" active />
            </div>
            <p className="mt-6 text-[13px] text-[#b3bac6] leading-loose">
              With N5, systems are described, not programmed.<br />
              AI designs and runs the system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({ label, active }) {
  return (
    <span className={`text-sm font-medium px-3 py-1.5 rounded-lg ${
      active
        ? 'bg-accent text-muted'
        : 'bg-surface-light/80 text-muted border border-border/50'
    }`}>
      {label}
    </span>
  )
}

function Arrow({ active }) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
      className={active ? 'text-gold/40' : 'text-border'}>
      <path d="M0 6h14M10 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
