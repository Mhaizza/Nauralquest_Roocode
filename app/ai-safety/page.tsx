import React from 'react';

const AISafetyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8">AI Safety Policy</h1>
          <p className="text-right text-gray-400 mb-8">Last Updated: May 2026</p>

          <p>NeuralQuest integrates AI systems into gameplay and educational experiences.</p>
          <p>We are committed to responsible AI usage.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Safety Principles</h2>
          <p>Our AI systems are designed to:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>encourage learning</li>
            <li>reduce harmful behavior</li>
            <li>avoid dangerous outputs</li>
            <li>promote ethical AI exploration</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Restricted Content</h2>
          <p>AI systems on NeuralQuest may refuse to generate:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>illegal instructions</li>
            <li>harmful activities</li>
            <li>malware</li>
            <li>violent extremism</li>
            <li>explicit abuse content</li>
            <li>privacy violations</li>
            <li>fraud or scams</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Human Oversight</h2>
          <p>AI systems are probabilistic and imperfect.</p>
          <p>Outputs may occasionally:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>be incorrect</li>
            <li>be incomplete</li>
            <li>fail unexpectedly</li>
          </ul>
          <p>Human review and judgment remain important.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Abuse Prevention</h2>
          <p>We may:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>monitor abuse patterns</li>
            <li>rate limit suspicious behavior</li>
            <li>restrict harmful accounts</li>
            <li>log safety incidents</li>
          </ul>
          <p>to protect the platform and users.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Continuous Improvement</h2>
          <p>Safety systems may evolve over time as the platform grows.</p>
          <p>Policies and moderation systems may be updated without notice.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>support@mptanalytics.com</p>
        </div>
      </div>
    </div>
  );
};

export default AISafetyPolicy;
