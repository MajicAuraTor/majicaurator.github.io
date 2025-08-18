import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  current: boolean;
}

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        // In a real app, this would fetch from your backend API
        // For now, we'll use mock data
        const mockExperiences: Experience[] = [
          {
            id: '1',
            title: 'Data Analyst',
            company: 'Pulse Consulting',
            duration: '2023 - Present',
            description: [
              'Developed automated reporting systems that reduced manual work by 60%',
              'Led data migration projects for enterprise clients',
              'Created interactive dashboards for executive leadership',
              'Collaborated with cross-functional teams to identify business insights'
            ],
            current: true
          },
          {
            id: '2',
            title: 'Technical Project Manager',
            company: 'i.c.stars',
            duration: '2022 - 2023',
            description: [
              'Managed full-stack development projects from conception to deployment',
              'Coordinated cross-functional teams of 8+ developers and designers',
              'Implemented Agile methodologies resulting in 40% faster delivery',
              'Facilitated stakeholder meetings and maintained project documentation'
            ],
            current: false
          },
          {
            id: '3',
            title: 'Business Analyst',
            company: 'Luminus Data Solutions',
            duration: '2021 - 2022',
            description: [
              'Analyzed business requirements and translated them into technical specifications',
              'Optimized data workflows resulting in 25% efficiency gains',
              'Collaborated with stakeholders to define project scope and deliverables',
              'Created comprehensive documentation for business processes'
            ],
            current: false
          },
          {
            id: '4',
            title: 'Junior Developer',
            company: 'Amplify',
            duration: '2020 - 2021',
            description: [
              'Built responsive web applications using React and Node.js',
              'Participated in code reviews and maintained high code quality standards',
              'Contributed to open-source projects and internal tooling',
              'Collaborated with senior developers on complex features'
            ],
            current: false
          }
        ];
        setExperiences(mockExperiences);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading experience...</p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      icon: Calendar,
      label: 'Years of Experience',
      value: '5+'
    },
    {
      icon: Users,
      label: 'Projects Managed',
      value: '50+'
    },
    {
      icon: TrendingUp,
      label: 'Success Rate',
      value: '95%'
    },
    {
      icon: MapPin,
      label: 'Companies',
      value: '4'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through roles that have shaped expertise in data analysis, 
            project management, and full-stack development
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200"
              >
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full ${
                  experience.current 
                    ? 'bg-green-500 ring-4 ring-green-200' 
                    : 'bg-blue-600 ring-4 ring-blue-200'
                } z-10`}></div>

                {/* Content */}
                <div className="ml-16 flex-grow">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className={`p-6 ${
                      experience.current 
                        ? 'bg-gradient-to-r from-green-50 to-teal-50' 
                        : 'bg-gradient-to-r from-blue-50 to-indigo-50'
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold">
                            {experience.company}
                          </p>
                        </div>
                        <div className="flex items-center mt-2 sm:mt-0">
                          {experience.current && (
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                              Current
                            </span>
                          )}
                          <span className="text-gray-600 font-medium">
                            {experience.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <ul className="space-y-3">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Challenge</h2>
            <p className="text-xl text-blue-100 mb-6">
              Looking to bring this experience to drive success in your organization
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;