export default function AboutSection() {
  return (
    <section className="landing-section" aria-labelledby="about-heading">
      <div className="landing-container">
        <header className="landing-section-header max-w-2xl mx-auto">
          <p className="landing-eyebrow" style={{ color: "#bf00ff" }}>
            About MPT Analytics
          </p>
          <h2 id="about-heading" className="landing-heading text-2xl sm:text-3xl">
            Built for beginners, designed like a game
          </h2>
          <p className="landing-subheading">
            MPT Analytics helps beginners learn AI through interactive and practical
            learning experiences — no dry lectures, just hands-on missions that stick.
          </p>
        </header>
      </div>
    </section>
  );
}
