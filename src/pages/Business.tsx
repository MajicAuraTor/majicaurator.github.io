import React from 'react';
import { Briefcase, Target, Users, Wrench, TrendingUp, Lightbulb } from 'lucide-react';
import { PageHeader, Card } from '../components/common';

const Business: React.FC = () => {
  const insights = [
    {
      title: "Innovation Accelerates Through Constraints",
      content: "The most creative solutions emerged when teams had limited resources but clear objectives. Our best client breakthrough came from a 48-hour hackathon with strict API limitations."
    },
    {
      title: "Data Storytelling > Data Analysis",
      content: "Clients don't buy insights; they buy confidence in decision-making. Learning to present findings as compelling narratives rather than technical reports increased project approval rates by 60%."
    },
    {
      title: "Remote-First Requires Intentional Culture",
      content: "Building trust and collaboration across distributed teams demands deliberate practices. Our weekly 'coffee chat' sessions and asynchronous documentation standards became competitive advantages."
    },
    {
      title: "Technical Debt is Business Debt",
      content: "Every shortcut in code eventually becomes a conversation about budget and timelines. Investing in proper architecture upfront saves both money and relationships."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Business"
        subtitle="Driving results through strategic thinking and execution"
        icon={<Briefcase className="w-8 h-8" />}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Client Project */}
        <Card className="p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Client Project: Predictive Analytics Dashboard</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Problem</h3>
                <p className="text-gray-700">Mid-sized manufacturing client was experiencing 23% unplanned downtime due to equipment failures, costing approximately $2.1M annually in lost productivity.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Users</h3>
                <p className="text-gray-700">Plant managers, maintenance supervisors, and C-suite executives needed different views of the same underlying equipment health data.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Approach</h3>
                <p className="text-gray-700">Built a SERN stack application with real-time sensor data ingestion, machine learning failure prediction models, and role-based dashboard views. Integrated with existing ERP systems through REST APIs.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">My Role</h3>
                <p className="text-gray-700">Technical lead and client liaison. Designed system architecture, implemented core prediction algorithms, and managed stakeholder expectations through weekly demos.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Result</h3>
                <p className="text-gray-700">Reduced unplanned downtime by 34% in first quarter post-deployment. Client renewed contract for additional facilities and referred two similar companies.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Artifacts</h3>
                <p className="text-gray-700">Live dashboard (under NDA), technical documentation, predictive model accuracy reports (89.3% precision for critical failures).</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Scattrd Reflection */}
        <Card className="p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Scattrd Reflection</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 mb-2">Win</h3>
              <p className="text-gray-700">Successfully pivoted our service offering from general data consulting to AI-powered predictive analytics, resulting in 40% higher project values and more qualified leads.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-orange-600 mb-2">Do Differently Next Time</h3>
              <p className="text-gray-700">Should have invested in formal project management training earlier. My technical background made me effective at solving problems but initially inefficient at preventing them through better planning and risk assessment.</p>
            </div>
          </div>
        </Card>

        {/* Company Engagement Day Insights */}
        <Card className="p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Company Engagement Day Insights</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">{insight.title}</h3>
                <p className="text-gray-700">{insight.content}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Business;