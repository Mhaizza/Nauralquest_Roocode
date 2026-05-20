export default function DigitalServiceBlock() {
  return (
    <section
      className="landing-section landing-section--compact"
      aria-labelledby="digital-service-heading"
    >
      <div className="landing-container">
        <div
          id="digital-service-heading"
          className="landing-card max-w-2xl mx-auto p-8 sm:p-10 text-center space-y-3"
        >
          <p
            className="text-sm sm:text-base text-white/90 font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            This is a digital service.
          </p>
          <p
            className="text-sm sm:text-base text-white/65 leading-relaxed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            No physical goods are shipped.
          </p>
          <p
            className="text-sm sm:text-base text-cyan-400/90 font-semibold"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Users receive instant access after payment.
          </p>
        </div>
      </div>
    </section>
  );
}
