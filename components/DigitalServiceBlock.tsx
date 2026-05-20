export default function DigitalServiceBlock() {
  return (
    <section className="px-4 py-12" aria-labelledby="digital-service-heading">
      <div className="max-w-2xl mx-auto">
        <div
          id="digital-service-heading"
          className="glass-card rounded-2xl border-2 border-cyan-500/30 p-8 text-center space-y-4"
          style={{ boxShadow: "0 0 24px rgba(0, 245, 255, 0.12)" }}
        >
          <p
            className="text-sm sm:text-base text-white/90 font-bold tracking-wide"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            This is a digital service.
          </p>
          <p
            className="text-sm sm:text-base text-white/75"
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
