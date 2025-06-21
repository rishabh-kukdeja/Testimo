// src/pages/Integrations.jsx
import React, { useState } from 'react';

const integrationsData = [
  { name: 'Notion', category: 'Online Creators', image: 'https://logo.clearbit.com/notion.so' },
  { name: 'Bubble', category: 'Website Builders', image: 'https://logo.clearbit.com/bubble.io' },
  { name: 'Webflow', category: 'Website Builders', image: 'https://logo.clearbit.com/webflow.com' },
  { name: 'ReactJS', category: 'Online Creators', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Carrd', category: 'Website Builders', image: 'https://logo.clearbit.com/carrd.co' },
  { name: 'Wix', category: 'Website Builders', image: 'https://logo.clearbit.com/wix.com' },
  { name: 'Potion', category: 'Online Creators', image: 'https://logo.clearbit.com/potion.so' },
  { name: 'WordPress', category: 'Website Builders', image: 'https://logo.clearbit.com/wordpress.com' },
  { name: 'Gartner', category: 'Review Platforms', image: 'https://logo.clearbit.com/gartner.com' },
  { name: 'TemplateMonster', category: 'Website Builders', image: 'https://logo.clearbit.com/templatemonster.com' },
  { name: 'NerdWallet', category: 'Review Platforms', image: 'https://logo.clearbit.com/nerdwallet.com' },
  { name: 'TrustRadius', category: 'Review Platforms', image: 'https://logo.clearbit.com/trustradius.com' },
  { name: 'IFTTT', category: 'Automation', image: 'https://logo.clearbit.com/ifttt.com' },
  { name: 'Quora', category: 'Social Media', image: 'https://logo.clearbit.com/quora.com' },
  { name: 'Help Scout', category: 'Customer Support', image: 'https://logo.clearbit.com/helpscout.com' },
  { name: 'Front', category: 'Customer Support', image: 'https://logo.clearbit.com/frontapp.com' },
  { name: 'Twitter DMs', category: 'Social Media', image: 'https://logo.clearbit.com/twitter.com' },
  { name: 'Zendesk', category: 'Customer Support', image: 'https://logo.clearbit.com/zendesk.com' },
  { name: 'Pabbly', category: 'Automation', image: 'https://logo.clearbit.com/pabbly.com' },
  { name: 'Tray.io', category: 'Automation', image: 'https://logo.clearbit.com/tray.io' },
  { name: 'Hacker News', category: 'Social Media', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg' },
];

const categories = [
  'All',
  ...Array.from(new Set(integrationsData.map(item => item.category)))
];

const Integrations = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredIntegrations = selectedCategory === 'All'
    ? integrationsData
    : integrationsData.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex">
      {/* Sidebar */}
      <aside className="w-64 p-6 border-r border-gray-800 hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category}>
              <button
                className={`w-full text-left px-3 py-2 rounded transition ${
                  selectedCategory === category ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-10">
          Import customer testimonials and embed them on any platform
        </h1>
        <p className="text-center text-gray-400 mb-8">
          We built the ultimate tool for showcasing your satisfied customers. With 3-lines of HTML code,
          you can embed all your testimonials to any platform!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src={integration.image}
                alt={integration.name}
                className="w-12 h-12 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
              <p className="text-gray-400 text-sm mb-4">Category: {integration.category}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                Learn How
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Integrations;
