import React from 'react';

const CommunityGuidelines = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Community Guidelines</h1>
          <p className="text-right text-gray-400 mb-8">Last Updated: May 2026</p>

          <p>NeuralQuest is designed to be a positive and creative AI learning environment.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Respect Others</h2>
          <p>Do not:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>harass</li>
            <li>threaten</li>
            <li>bully</li>
            <li>discriminate against</li>
            <li>impersonate</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">No Harmful Content</h2>
          <p>Do not submit content involving:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>illegal activity</li>
            <li>malware</li>
            <li>scams</li>
            <li>hate speech</li>
            <li>violent extremism</li>
            <li>explicit sexual exploitation</li>
            <li>harmful instructions</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Fair Play</h2>
          <p>Do not:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>exploit bugs</li>
            <li>abuse reward systems</li>
            <li>automate gameplay unfairly</li>
            <li>manipulate leaderboards</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">AI Usage</h2>
          <p>Use AI systems responsibly.</p>
          <p>Do not attempt to:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>bypass safety systems</li>
            <li>jailbreak AI systems</li>
            <li>generate abusive content</li>
            <li>exploit platform vulnerabilities</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Enforcement</h2>
          <p>Violations may result in:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>warnings</li>
            <li>temporary restrictions</li>
            <li>permanent bans</li>
            <li>removal of content</li>
          </ul>
          <p>without prior notice.</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
