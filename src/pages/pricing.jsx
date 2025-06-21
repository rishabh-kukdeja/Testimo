import React, { useState } from 'react';

const monthlyPlans = [
  {
    name: 'Starter',
    price: '$0',
    subtitle: 'For hobbies 🐣',
    description: 'Free forever, features include:',
    features: [
      '1 space',
      '2 video testimonials in total',
      '10 text testimonials in total',
      'Unlimited X, LinkedIn posts importing',
      'Public Testimonial page',
      'Wall of Love widget with our logo',
    ],
    button: 'Get started',
    buttonStyle: 'bg-white text-gray-900',
  },
  {
    name: 'Starter Plus',
    price: '$21',
    subtitle: 'For small teams 👥',
    description: 'Everything in Starter, and:',
    features: [
      'Unlimited text testimonials',
      '2 video testimonials in total',
      '10+ other social media and review sites importing',
      'AI case study generator',
      'Page localization',
      'Remove our branding from all widgets',
      'Custom domain (SSL)',
    ],
    button: 'Start a free trial',
    buttonStyle: 'bg-yellow-500 text-gray-900 hover:bg-yellow-400',
  },
  {
    name: 'Premium',
    price: '$34',
    subtitle: 'For growing businesses 🧑‍💻',
    description: 'Everything in Starter Plus, and:',
    mostPopular: true,
    features: [
      'Unlimited testimonials',
      '500 automated monthly invitations via T.E.A.',
      '3 minutes video time limit',
      'Custom cards on Wall of Love',
      'eGift cards integration',
      'Portfolio page',
      'RESTful API & Webhook',
      'Zapier and Make integrations',
      '2 account-level staff seats',
    ],
    button: 'Start a free trial',
    buttonStyle: 'bg-blue-600 text-white hover:bg-blue-500',
  },
  {
    name: 'Ultimate',
    price: '$50',
    subtitle: 'For large businesses 🚀',
    description: 'Everything in Premium, and:',
    features: [
      'Unlimited testimonials',
      '1,000 automated monthly invitations via T.E.A.',
      '5 minutes video time limit',
      'Video metric insights',
      'Sentiment analysis',
      'Star rating snippet in Google search',
      'HubSpot, Slack integrations',
      '3 space-level seats for each space',
      '5 account-level staff seats',
      'Onboarding assistance',
      'Pro video editing service ($500 value)',
    ],
    button: 'Start a free trial',
    buttonStyle: 'bg-yellow-500 text-gray-900 hover:bg-yellow-400',
  }
];

const yearlyPlans = monthlyPlans
  .filter(plan => plan.price !== '$0') // Exclude free plan
  .map(plan => ({
    ...plan,
    price: `$${parseInt(plan.price.slice(1)) * 10}`, // Multiply for yearly
  }));

const Pricing = () => {
  const [selected, setSelected] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = billingCycle === 'monthly' ? monthlyPlans : yearlyPlans;

  return (
    <div className="bg-gray-900 text-white py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          The easiest way to drive more sales<br />for your business
        </h1>
        <p className="text-center text-gray-300 mb-6">
          Start with 10 text testimonials and 2 video testimonials on us, then upgrade to our paid plan only if you're happy.
        </p>
        <p className="text-center text-green-400 font-medium mb-10">
          7 days free trial, cancel anytime!
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-14">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => {
              setBillingCycle('monthly');
              setSelected(null);
            }}
          >
            Billed Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              billingCycle === 'yearly' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => {
              setBillingCycle('yearly');
              setSelected(null);
            }}
          >
            Billed Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const isSelected = selected === index;
            const billingText = billingCycle === 'monthly' ? '/month' : '/year';

            return (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`
                  relative p-6 bg-gray-800 rounded-lg shadow-md flex flex-col transition-all duration-300 cursor-pointer
                  ${plan.mostPopular ? 'border-4 border-blue-500' : 'border border-gray-700'}
                  ${isSelected ? 'ring-4 ring-blue-400 scale-105' : 'hover:scale-[1.02]'}
                `}
              >
                {plan.mostPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{plan.subtitle}</p>
                <p className="text-3xl font-bold text-white mb-2">
                  {plan.price}<span className="text-base font-normal">{billingText}</span>
                </p>
                <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className={`mt-auto px-4 py-2 rounded font-medium ${plan.buttonStyle}`}>
                  {plan.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
