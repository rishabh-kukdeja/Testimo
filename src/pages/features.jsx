// src/pages/features.jsx
import React from 'react';

const features = [
  {
    title: 'A dedicated landing page',
    description: 'Create a dedicated landing page for your business. Share the page link easily via email, social media, or even SMS. Setup done in one minute.',
    button: 'Try it for free',
    imagePosition: 'right',
    image: '/images/feature-landing.png'
  },
  {
    title: 'A dashboard to manage all testimonials',
    description: 'You’ll have a simple & clean dashboard to manage all testimonials in one place. Not just for your team inbox, but it’s designed for your social proof!',
    button: 'Try it for free',
    imagePosition: 'left',
    image: '/images/feature-dashboard.png'
  },
  {
    title: 'Understand how video testimonials are performing',
    description: 'Track the metrics from all embedded videos. Help your marketing team understand the performance at a glance, even personalize the best performing videos to different marketing channels.',
    button: 'Try it for free',
    imagePosition: 'right',
    image: '/images/feature-analytics.png'
  },
  {
    title: 'Not only text and video testimonials',
    description: 'You can embed testimonials from social media like Twitter, LinkedIn, YouTube, video hosting, G2, Capterra, Trustpilot, etc. This helps manage all your social proof in a single place.',
    button: 'Try it for free',
    imagePosition: 'left',
    image: '/images/feature-socialproof.png'
  }
];

const gridFeatures = [
  { title: 'Dedicated page', desc: 'Dedicated space page with a unique link for text or video testimonials.', emoji: '🧾' },
  { title: 'Embeddable Wall of love', desc: 'Show all your selected testimonials on your own site.', emoji: '🧱' },
  { title: 'Dashboard page', desc: 'Manage all your testimonial spaces and add/update/remove entries.', emoji: '📋' },
  { title: 'Video download', desc: 'Download videos in original MP4 format.', emoji: '⬇️' },
  { title: 'Video embed', desc: 'One-line embed code, works on any platform.', emoji: '💻' },
  { title: 'Your video message', desc: 'Let customers record and send their video directly.', emoji: '🎥' },
  { title: 'Custom domain', desc: 'Add a custom domain like testimonial.yourbrand.com.', emoji: '🌐' },
  { title: 'Custom color', desc: 'Change button colors to match your brand.', emoji: '🎨' },
  { title: 'Dark or light theme', desc: 'Choose a theme to fit your website style.', emoji: '🌗' }
];

const Features = () => {
  return (
    <div className="bg-[#0B1120] text-white">
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
        Collect and display testimonials all in one solution
      </h2>

      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-20 ${
            feature.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="md:w-1/2 px-6 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 mb-4">{feature.description}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded">
              {feature.button}
            </button>
          </div>
          <div className="md:w-1/2 px-6">
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className="bg-[#111827] py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h3 className="text-3xl font-bold text-white mb-6">
        Everything you need to leverage testimonials
      </h3>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        We support all these features for you to collect and manage all testimonials.
        Features with the lock are only available for the paid plans.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {gridFeatures.map((item, idx) => (
          <div key={idx} className="bg-[#1F2937] p-6 rounded-lg shadow text-left">
            <div className="text-3xl mb-3">{item.emoji}</div>
            <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="bg-[#172033] py-16 px-6 text-center">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        Ready to collect testimonials?
      </h3>
      <p className="text-gray-300 mb-6">
        Loved by Fortune 500 companies, startups, freelancers, and agencies.
        Your customers’ testimonials are the best social proof you can get!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md">
          Get started with FREE credits
        </button>
        <button className="border border-gray-500 hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-md">
          Talk to us 💬
        </button>
      </div>
    </div>
  </section>
</div>
  );
};

export default Features;
