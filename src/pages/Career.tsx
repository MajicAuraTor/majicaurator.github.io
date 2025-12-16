import React from 'react';
import { Target, MapPin, Calendar, Briefcase } from 'lucide-react';
import { PageHeader, Card } from '../components/common';

const Career: React.FC = () => {
  const targetRoles = [
    {
      title: "Senior Full-Stack Developer",
      reason: "Ready to contribute immediately while learning from experienced teams. Excited about tackling complex technical challenges and mentoring junior developers."
    },
    {
      title: "Technical Product Manager",
      reason: "My combination of hands-on development experience and client-facing leadership makes me effective at translating business needs into technical requirements."
    },
    {
      title: "Solutions Architect",
      reason: "Passionate about designing systems that scale. My experience with both startup constraints and enterprise requirements provides valuable perspective."
    }
  ];

  const shortTermGoals = [
    "Complete AWS Solutions Architect certification",
    "Contribute to 2-3 open source projects to demonstrate code quality",
    "Build portfolio of 5 production-ready applications showcasing different tech stacks",
    "Network with 50+ professionals in target companies through informational interviews",
    "Secure position at growth-stage company with strong engineering culture"
  ];

  const longTermGoals = [
    "Establish thought leadership through technical writing and conference presentations",
    "Mentor 2-3 junior developers or bootcamp graduates",
    "Lead significant feature development or system architecture project",
    "Explore advanced specializations (machine learning, distributed systems, or cybersecurity)",
    "Evaluate opportunities for technical leadership roles"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Career"
        subtitle="Strategic planning for professional growth and impact"
        icon={<Target className="w-8 h-8" />}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission */}
        <Card className="p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            I leverage data and technology to solve complex business problems, particularly in environments where traditional software solutions fall short. My goal is to bridge the gap between technical possibility and business value, creating systems that are both innovative and practical.
          </p>
        </Card>

        {/* Target Roles */}
        <Card className="p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Briefcase className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Target Roles & Why</h2>
          </div>
          <div className="space-y-6">
            {targetRoles.map((role, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-700">{role.reason}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Career Plans */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-900">0-12 Month Plan</h3>
            </div>
            <ul className="space-y-3">
              {shortTermGoals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">12-24 Month Plan</h3>
            </div>
            <ul className="space-y-3">
              {longTermGoals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Placement Ready */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Placement-Ready</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <p className="text-gray-800 text-lg leading-relaxed">
              Experienced full-stack developer with proven ability to deliver complex data-driven applications. Strong in SERN stack, Power BI, and client communication. Seeking roles where I can contribute technical expertise while growing leadership skills in fast-paced, innovation-focused environments.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Career;