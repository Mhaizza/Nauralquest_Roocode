import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Cookie Policy</h1>
          <p className="text-right text-gray-400 mb-8">Last Updated: May 2026</p>

          <p>NeuralQuest uses cookies and similar technologies to improve platform functionality and user experience.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device that help websites remember information between visits.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <p>We may use cookies to:</p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>keep users signed in</li>
            <li>remember preferences</li>
            <li>save gameplay sessions</li>
            <li>improve platform performance</li>
            <li>analyze traffic and usage</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          <h3 className="text-xl font-semibold mt-4">Essential Cookies</h3>
          <p>Required for core platform functionality.</p>
          <h3 className="text-xl font-semibold mt-4">Analytics Cookies</h3>
          <p>Help us understand how users interact with the platform.</p>
          <h3 className="text-xl font-semibold mt-4">Preference Cookies</h3>
          <p>Store settings such as theme, language, or gameplay preferences.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p>You can disable cookies in your browser settings.</p>
          <p>However, some features of NeuralQuest may not function properly if cookies are disabled.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
          <p>Some third-party services integrated into NeuralQuest may use their own cookies.</p>
          <p>We do not directly control third-party cookie behavior.</p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>support@mptanalytics.com</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
