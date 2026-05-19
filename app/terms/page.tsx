import { NextPage } from 'next';

const TermsOfService: NextPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
          <p className="text-right text-gray-400 mb-8">Last Updated: May 2026</p>

          <p className="mb-6">Welcome to NeuralQuest.</p>
          <p className="mb-6">By accessing or using NeuralQuest (“the Platform”), you agree to these Terms of Service (“Terms”). If you do not agree, please do not use the Platform.</p>

          <hr className="border-gray-700 my-8" />

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. About NeuralQuest</h2>
              <p>NeuralQuest is an interactive AI learning and gamified educational platform designed to help users explore artificial intelligence concepts through missions, simulations, challenges, and gameplay systems.</p>
              <p>The Platform may evolve over time and features may change without prior notice.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
              <p>You must be at least 13 years old to use the Platform.</p>
              <p>If you are under the age required by your local laws to consent to online services, you must use the Platform under supervision of a parent or legal guardian.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p>You are responsible for:</p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>maintaining the security of your account</li>
                <li>protecting your login credentials</li>
                <li>all activities performed under your account</li>
              </ul>
              <p>We reserve the right to suspend or terminate accounts involved in:</p>
              <ul className="list-disc list-inside ml-4">
                <li>abuse</li>
                <li>cheating</li>
                <li>exploitation</li>
                <li>fraud</li>
                <li>malicious automation</li>
                <li>harassment</li>
                <li>illegal activity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
              <p>You agree NOT to:</p>
              <ul className="list-disc list-inside ml-4">
                <li>exploit bugs or vulnerabilities</li>
                <li>attempt unauthorized access</li>
                <li>disrupt servers or infrastructure</li>
                <li>upload malicious code</li>
                <li>reverse engineer protected systems</li>
                <li>use the Platform for illegal purposes</li>
                <li>harass or harm other users</li>
                <li>generate unlawful or abusive AI content</li>
              </ul>
              <p className="mt-4">We may restrict or remove content that violates these Terms.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">5. AI-Generated Content</h2>
                <p>NeuralQuest may provide AI-generated responses, suggestions, simulations, or educational feedback.</p>
                <p className="mt-4">AI outputs:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>may contain inaccuracies</li>
                    <li>are provided for educational and entertainment purposes</li>
                    <li>should not be treated as professional, legal, medical, or financial advice</li>
                </ul>
                <p className="mt-4">Users remain responsible for how they use AI-generated content.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
                <p>You retain ownership of prompts, text, and content you submit.</p>
                <p className="mt-4">However, by using the Platform, you grant NeuralQuest a non-exclusive license to:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>store</li>
                    <li>process</li>
                    <li>display</li>
                    <li>analyze</li>
                </ul>
                <p className="mt-4">such content for platform functionality, moderation, analytics, and improvement purposes.</p>
                <p className="mt-4">We do not claim ownership of your original creations.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">7. Virtual Currency and Rewards</h2>
                <p>The Platform may include:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>XP</li>
                    <li>credits</li>
                    <li>ranks</li>
                    <li>unlockables</li>
                    <li>virtual rewards</li>
                </ul>
                <p className="mt-4">These items:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>have no real-world monetary value</li>
                    <li>are non-transferable</li>
                    <li>may be modified or removed at any time</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">8. Availability</h2>
                <p>We do not guarantee uninterrupted availability.</p>
                <p className="mt-4">Features may be:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>updated</li>
                    <li>modified</li>
                    <li>disabled</li>
                    <li>removed</li>
                </ul>
                <p className="mt-4">without notice.</p>
                <p className="mt-4">Temporary downtime, maintenance, or service interruptions may occur.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
                <p>All platform branding, systems, visuals, UI, code, game mechanics, and original content belong to NeuralQuest unless otherwise stated.</p>
                <p className="mt-4">You may not:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>copy</li>
                    <li>redistribute</li>
                    <li>resell</li>
                    <li>commercially exploit</li>
                </ul>
                <p className="mt-4">any part of the Platform without permission.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">10. Privacy</h2>
                <p>Your use of the Platform is also governed by our Privacy Policy.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, NeuralQuest shall not be liable for:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>indirect damages</li>
                    <li>loss of data</li>
                    <li>service interruptions</li>
                    <li>loss of progress</li>
                    <li>business losses</li>
                    <li>AI inaccuracies</li>
                </ul>
                <p className="mt-4">Use of the Platform is at your own risk.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
                <p>We reserve the right to suspend or terminate access to the Platform at any time for violations of these Terms or misuse of the service.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">13. Changes to These Terms</h2>
                <p>We may update these Terms periodically.</p>
                <p className="mt-4">Continued use of the Platform after updates constitutes acceptance of the revised Terms.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">14. Contact</h2>
                <p>For questions regarding these Terms, contact:</p>
                <p className="mt-4"><a href="mailto:support@mptanalytics.com" className="text-blue-400 hover:underline">support@mptanalytics.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
