import React from 'react';
import { Heart, DollarSign, Smile, Brain, Activity } from 'lucide-react';
import { PageHeader, Card } from '../components/common';

const Wellness: React.FC = () => {
  const financialGoals = {
    shortTerm: [
      "Build emergency fund covering 4 months of expenses",
      "Maximize 401k employer match (currently contributing 8%)",
      "Create automated savings plan for certification and conference expenses"
    ],
    longTerm: [
      "Achieve 20% down payment for home purchase within 24 months",
      "Establish investment portfolio with index funds and tech sector focus",
      "Build passive income stream through technical consulting or course creation"
    ]
  };

  const affirmations = [
    "I am capable of learning and mastering new technologies quickly",
    "My unique background brings valuable perspective to any team",
    "I communicate complex ideas clearly and build trust through transparency",
    "I handle setbacks as learning opportunities, not personal failures",
    "I deserve success and am working consistently toward my goals"
  ];

  const routines = {
    morning: [
      "10 minutes meditation using Headspace app",
      "Review daily priorities and weekly goals",
      "Read tech articles or documentation for 20 minutes",
      "Physical exercise (running or bodyweight routine)"
    ],
    evening: [
      "Reflect on day's accomplishments and challenges in journal",
      "Plan next day's top 3 priorities",
      "Read fiction for 30 minutes to decompress",
      "No screens after 10 PM for better sleep quality"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Wellness"
        subtitle="Holistic approach to personal and professional sustainability"
        icon={<Heart className="w-8 h-8" />}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Financial Goals */}
        <Card className="p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Financial Goals</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Short-Term (6 months)</h3>
              <ul className="space-y-3">
                {financialGoals.shortTerm.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Long-Term (2+ years)</h3>
              <ul className="space-y-3">
                {financialGoals.longTerm.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Emotional Affirmations */}
        <Card className="p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Smile className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Emotional Affirmations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {affirmations.map((affirmation, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
                <p className="text-gray-800 font-medium">{affirmation}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Mental Routines */}
        <Card className="p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Mental Routines</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Morning (6:30-7:30 AM)</h3>
              <ul className="space-y-3">
                {routines.morning.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Evening (9:00-10:00 PM)</h3>
              <ul className="space-y-3">
                {routines.evening.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Physical Wellness */}
        <Card className="p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Activity className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">Physical Wellness</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Resources</h3>
              <p className="text-gray-700">Local gym membership, Strava for running tracking, MyFitnessPal for nutrition awareness</p>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">SMART Goal</h3>
              <p className="text-gray-800 font-medium mb-2">
                Run a 10K race in under 55 minutes by June 2025 (current 5K time: 28 minutes)
              </p>
              <p className="text-gray-700">
                Training plan includes 3 runs per week with one long run, one speed work session, and one recovery run.
              </p>
            </div>
          </div>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md inline-block">
            <p className="text-gray-700 mb-2">
              <strong>Contact:</strong> jprice@icstars.org
            </p>
            <a 
              href="https://www.linkedin.com/in/jatore-price/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellness;