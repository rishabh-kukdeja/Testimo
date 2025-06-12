// src/pages/LandingPage.jsx
import React from 'react';

const LandingPage = () => {
  const features = [
    {
      icon: "📹",
      title: "Collect Video & Text Testimonials",
      description: "Send branded links to your customers to easily submit video or written reviews—no setup needed."
    },
    {
      icon: "🎨",
      title: "Branded Templates & Spaces",
      description: "Customize collection forms, landing pages, and thank you screens with your branding in minutes."
    },
    {
      icon: "📺",
      title: "Wall of Love Displays",
      description: "Embed curated testimonials in responsive widgets or share a hosted page—showcase your best social proof."
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      description: "Works with Shopify, WordPress, Webflow, or any site with a simple embed snippet."
    },
    {
      icon: "✂️",
      title: "Editing & Transcripts",
      description: "Trim videos, add captions (multi-language), and generate transcripts—right in the platform."
    },
    {
      icon: "⚡",
      title: "Automation & Social Proof",
      description: "Automate requests, import reviews, and use badges to highlight ratings and credibility."
    }
  ];

  const testimonials = [
    {
      name: "Alex K.",
      role: "Ecommerce Founder",
      content: "Collecting video testimonials was a nightmare—now it's just a link! Our conversions jumped 25%.",
      color: "border-l-blue-500"
    },
    {
      name: "Priya S.",
      role: "Agency Owner",
      content: "The Wall of Love widget made our homepage way more trustworthy. Clients love recording quick videos!",
      color: "border-l-purple-500"
    },
    {
      name: "Miguel R.",
      role: "Startup CEO",
      content: "We collect, edit, and publish testimonials in minutes. The automation and transcript features are a game-changer.",
      color: "border-l-green-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/mo",
      features: [
        "1 Space",
        "2 Video Testimonials",
        "10 Text Testimonials",
        "Basic Branding"
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-gray-600 hover:bg-gray-700 text-white",
      popular: false
    },
    {
      name: "Starter",
      price: "$20",
      period: "/mo",
      features: [
        "Unlimited Text Testimonials",
        "2 Video Submissions (1min)",
        "Custom Branding"
      ],
      buttonText: "Choose Starter",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
      popular: true
    },
    {
      name: "Premium",
      price: "$50",
      period: "/mo",
      features: [
        "Unlimited Testimonials",
        "3-min Videos",
        "Multi-user Access"
      ],
      buttonText: "Choose Premium",
      buttonStyle: "bg-gray-600 hover:bg-gray-700 text-white",
      popular: false
    },
    {
      name: "Ultimate",
      price: "$70",
      period: "/mo",
      features: [
        "Unlimited Workspaces",
        "5-min Videos",
        "Full Suite of Features"
      ],
      buttonText: "Choose Ultimate",
      buttonStyle: "bg-gray-600 hover:bg-gray-700 text-white",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Collect, Manage, and Showcase{' '}
            <span className="text-blue-500">Customer Testimonials</span>{' '}
            Effortlessly
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The simplest way for creators, brands, and startups to gather authentic video and 
            text testimonials—no tech skills needed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg">
              Try Free
            </button>
            
            <button className="border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Powerful Features for Impactful Social Proof
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-700 rounded-xl p-8 hover:bg-gray-650 transition-colors duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            See What Our Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-gray-800 rounded-xl p-8 border-l-4 ${testimonial.color} hover:bg-gray-750 transition-colors duration-200`}>
                <div className="mb-6">
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Fair Pricing for Any Stage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-700 rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} hover:bg-gray-650 transition-all duration-200`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold text-blue-500">Testimonial.to</span>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Video Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Text Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wall of Love</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Pricing</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Free Plan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Paid Plans</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Testimonial.to. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;