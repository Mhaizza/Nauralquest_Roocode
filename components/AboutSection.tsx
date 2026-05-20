export default function AboutSection() {
  return (
    <section className="px-4 py-12" aria-labelledby="about-heading">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          id="about-heading"
          className="text-lg font-black tracking-widest text-cyan-400 mb-4 uppercase"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          About
        </h2>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          About: MPT Analytics helps beginners learn AI through interactive and
          practical learning experiences.
        </p>
      </div>
    </section>
  );
}
