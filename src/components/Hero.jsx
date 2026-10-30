export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative max-w-4xl mx-auto text-center"
        style={{ animation: 'fadeInUp 0.8s ease-out' }}>

        <p className="text-sm font-mono tracking-widest uppercase text-muted mb-6">
          N5 Technologies
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#e6eaf2] leading-[1.1] mb-8">
          AI That Turns{' '}
          <span className="text-gold font-bold">Intent Into Systems</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#9aa3b2] max-w-3xl mx-auto mb-1.5 leading-relaxed">
          Anyone can describe what they need. N5 turns that intent into enterprise-grade systems.
        </p>
        <p className="text-base sm:text-lg text-[#9aa3b2]/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          Through <span className="text-[#e6eaf2]">Sutra</span>, our system design and compilation layer,{' '}
          and <span className="text-[#e6eaf2]">Rumi</span>, our execution layer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#stack"
            className="px-8 py-3.5 rounded-lg bg-accent text-[#e6eaf2] font-medium hover:bg-accent-light transition-all">
            Explore the Stack
          </a>
          <a href="#how"
            className="px-8 py-3.5 rounded-lg border border-border text-[#9aa3b2] hover:border-[#4a5568] hover:text-[#e6eaf2] transition-all">
            See How It Works
          </a>
        </div>
      </div>

      {/* Subtle scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  )
}
