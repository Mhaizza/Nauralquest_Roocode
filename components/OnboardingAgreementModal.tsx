import React, { useEffect, useState } from "react";

const STORAGE_KEY = "neuralQuestOnboardingAccepted";

interface OnboardingAgreementModalProps {
  onAccept: () => void;
}

export default function OnboardingAgreementModal({ onAccept }: OnboardingAgreementModalProps) {
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check localStorage if user already accepted
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      setShowModal(true);
    } else {
      onAccept();
    }
  }, [onAccept]);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setShowModal(false);
    onAccept();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="relative max-w-md w-full mx-4 p-6 bg-gradient-to-br from-cyan-900/80 to-pink-900/80 border border-cyan-400 rounded-lg shadow-lg neon-border">
        <h2 className="text-center text-cyan-400 font-extrabold text-xl mb-4 tracking-widest" style={{ fontFamily: "Orbitron, sans-serif" }}>
          Before entering the Neural Grid, all operatives must accept the AI Network Protocol.
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (termsChecked && privacyChecked) {
              handleAccept();
            }
          }}
          className="flex flex-col gap-4"
        >
          <label className="flex items-center gap-3 text-cyan-300">
            <input
              type="checkbox"
              checked={termsChecked}
              onChange={(e) => setTermsChecked(e.target.checked)}
              className="accent-cyan-400"
            />
            I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-400">Terms of Service</a>
          </label>
          <label className="flex items-center gap-3 text-pink-300">
            <input
              type="checkbox"
              checked={privacyChecked}
              onChange={(e) => setPrivacyChecked(e.target.checked)}
              className="accent-pink-400"
            />
            I agree to the <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400">Privacy Policy</a>
          </label>
          <button
            type="submit"
            disabled={!(termsChecked && privacyChecked)}
            className={`mt-4 py-2 rounded font-bold tracking-widest transition-colors duration-300 ${
              termsChecked && privacyChecked
                ? "bg-cyan-400 text-black hover:bg-pink-400"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            ENTER
          </button>
        </form>
      </div>
      <style jsx>{`
        .neon-border {
          box-shadow: 0 0 8px 2px #0ff, 0 0 20px 4px #f0f, 0 0 30px 6px #0ff, 0 0 40px 8px #f0f;
          animation: neonPulse 3s ease-in-out infinite alternate;
        }

        @keyframes neonPulse {
          0% {
            box-shadow: 0 0 8px 2px #0ff, 0 0 20px 4px #f0f, 0 0 30px 6px #0ff, 0 0 40px 8px #f0f;
          }
          100% {
            box-shadow: 0 0 12px 4px #0ff, 0 0 28px 6px #f0f, 0 0 40px 8px #0ff, 0 0 50px 10px #f0f;
          }
        }
      `}</style>
    </div>
  );
}
