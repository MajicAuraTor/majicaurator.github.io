import { MapPin, Calendar, Award, Target } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      company: 'Pulse Consulting',
      role: 'Data Analyst',
      period: '2023 - Present',
      description: 'Leading data analysis initiatives and delivering strategic insights for enterprise clients.'
    },
    {
      company: 'i.c.stars',
      role: 'Technical Project Manager',
      period: '2022 - 2023',
      description: 'Managed full-stack development projects and coordinated cross-functional teams.'
    },
    {
      company: 'Luminus Data Solutions',
      role: 'Business Analyst',
      period: '2021 - 2022',
      description: 'Analyzed business requirements and optimized data workflows for improved efficiency.'
    },
    {
      company: 'Amplify',
      role: 'Junior Developer',
      period: '2020 - 2021',
      description: 'Built responsive web applications and contributed to open-source projects.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Clarity',
      description: 'Translating complex technical concepts into clear, actionable insights that drive business decisions.'
    },
    {
      icon: Award,
      title: 'Structure',
      description: 'Implementing systematic approaches to project management and data analysis for consistent results.'
    },
    {
      icon: MapPin,
      title: 'Empathy',
      description: 'Understanding stakeholder needs and fostering collaborative environments that empower teams.'
    },
    {
      icon: Calendar,
      title: 'Impact',
      description: 'Focusing on measurable outcomes that create lasting value for organizations and communities.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Jatore
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate professional bridging the gap between data science and strategic execution
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Summary</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Jatore M. Price is a dynamic professional who seamlessly combines analytical expertise 
                with technical project management to deliver exceptional results. With a proven track 
                record of transforming complex data into strategic business insights, she has consistently 
                driven organizational success through data-driven decision making.
              </p>
              <p>
                Her journey through leading organizations like Amplify, Luminus Data Solutions, i.c.stars, 
                and currently Pulse Consulting has equipped her with a unique perspective on how technology 
                and data analysis can be leveraged to solve real-world business challenges.
              </p>
              <p>
                As a technical project manager, Jatore excels at coordinating cross-functional teams, 
                implementing Agile methodologies, and ensuring project deliverables align with business 
                objectives. Her full-stack development background enables her to bridge the communication 
                gap between technical teams and business stakeholders effectively.
              </p>
              <p>
                Beyond her technical skills, Jatore is passionate about mentoring emerging professionals 
                and contributing to initiatives that promote diversity and inclusion in the technology sector.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Timeline</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-semibold text-gray-900">{item.role}</h3>
                      <p className="text-blue-600 font-medium">{item.company}</p>
                      <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide my approach to work and leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;