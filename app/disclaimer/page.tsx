import React from 'react';

const Disclaimer = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Disclaimer</h1>
          <p className="text-right text-gray-400 mb-8">Last Updated: May 2026</p>

          <p>NeuralQuest is provided for educational and entertainment purposes only.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">AI Limitations</h2>
          <p>AI-generated content may:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>contain inaccuracies</li>
            <li>provide incomplete information</li>
            <li>generate unexpected outputs</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">No Professional Advice</h2>
          <p>Nothing on NeuralQuest constitutes:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>legal advice</li>
            <li>financial advice</li>
            <li>medical advice</li>
            <li>psychological advice</li>
            <li>professional certification</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Platform Availability</h2>
          <p>We do not guarantee uninterrupted operation, uptime, or permanent preservation of user progress.</p>

          <h2 className="text-2xl font-semibold mb-4">Educational Simulation</h2>
          <p>Gameplay systems, AI agents, missions, and simulations are fictionalized educational experiences.</p>
          <p>They should not be interpreted as real-world professional systems.</p>

          <h2 className="text-2xl font-semibold mb-4">Use at Your Own Risk</h2>
          <p>Users assume responsibility for how they use the platform and AI-generated outputs.</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
