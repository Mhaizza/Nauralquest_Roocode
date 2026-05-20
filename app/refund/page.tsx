"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#050510] cyber-grid flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-cyan-500/10 space-y-8">
            <header className="space-y-2">
              <h1
                className="text-2xl md:text-3xl font-black text-white tracking-wider"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Refund Policy
              </h1>
              <p className="text-gray-500 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                MPT Analytics — Last updated: May 2026
              </p>
            </header>

            <section>
              <p className="text-gray-300 leading-relaxed">
                This Refund Policy applies to paid subscriptions and digital purchases made through MPT Analytics, an online AI learning platform operated as a digital service. By purchasing access, you agree to the terms below.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">01.</span> 15-DAY MONEY-BACK GUARANTEE
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>
                  If you are not satisfied with your purchase, you may request a full refund within <strong className="text-white">fifteen (15) calendar days</strong> from the date of your original payment (&quot;Refund Period&quot;).
                </p>
                <p>
                  Refund requests submitted after the 15-day Refund Period will not be eligible for a refund under this policy, except where required by applicable law.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">02.</span> ELIGIBILITY
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>To qualify for a refund, you must:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>submit your request within 15 days of payment;</li>
                  <li>provide the email address associated with your account;</li>
                  <li>include your order or transaction reference, if available;</li>
                  <li>not have violated our Terms of Service (including abuse, fraud, or account sharing).</li>
                </ul>
                <p>
                  We reserve the right to deny refund requests that appear fraudulent, abusive, or made in bad faith.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">03.</span> DIGITAL SERVICE DELIVERY
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>
                  MPT Analytics is a digital service. No physical goods are shipped. Upon successful payment, users receive instant access to the platform. Refunds relate to digital access fees only.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">04.</span> HOW TO REQUEST A REFUND
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>
                  Send your refund request to{" "}
                  <a
                    href="mailto:support@mptanalytics.com?subject=Refund%20Request"
                    className="text-cyan-400 hover:text-pink-400 transition-colors underline underline-offset-4"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    support@mptanalytics.com
                  </a>{" "}
                  with the subject line &quot;Refund Request&quot; and include:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>full name and account email;</li>
                  <li>date of purchase;</li>
                  <li>payment method or receipt details;</li>
                  <li>brief reason for the request (optional but helpful).</li>
                </ul>
                <p>We aim to acknowledge refund requests within 2 business days.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">05.</span> PROCESSING TIME
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>
                  Approved refunds are typically processed within 5–10 business days. The time for funds to appear in your account depends on your bank or payment provider and may take additional business days.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">06.</span> ACCESS AFTER REFUND
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>
                  Once a refund is issued, your paid access to MPT Analytics may be revoked immediately or at the end of the current billing period, at our discretion. Any progress or premium features tied to the paid plan may no longer be available.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">07.</span> NON-REFUNDABLE CASES
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>Refunds may be declined if:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>the request is made after the 15-day Refund Period;</li>
                  <li>the account was terminated for Terms of Service violations;</li>
                  <li>substantial use of paid content occurred beyond reasonable trial evaluation;</li>
                  <li>chargebacks were initiated without contacting support first.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">08.</span> CONTACT
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>For refund or billing questions:</p>
                <p>
                  Contact:{" "}
                  <a
                    href="mailto:support@mptanalytics.com"
                    className="text-cyan-400 hover:text-pink-400 transition-colors underline underline-offset-4"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    support@mptanalytics.com
                  </a>
                </p>
                <p className="text-sm">
                  See also our{" "}
                  <Link href="/terms" className="text-cyan-400 hover:text-pink-400 transition-colors">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-cyan-400 hover:text-pink-400 transition-colors">
                    Privacy
                  </Link>{" "}
                  policies.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
