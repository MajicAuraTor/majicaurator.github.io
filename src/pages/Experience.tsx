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
            title: 'Full Stack Developer & Project Manager Intern',
            company: 'i.c.stars | Chicago',
            duration: 'May 2025 – Present',
              description: [
                'Lead sprint ceremonies and release coordination for an Agile team using Microsoft Planner (Kanban) and GitHub Actions (CI/CD), keeping milestones on track through clear status updates and tracking.',
                'Presented sprint demos and status updates; communicated timelines, risks, and next steps in plain language.',
                'Translated client feedback into actionable user stories and tasks, re-prioritized backlog accordingly.',
                'Facilitated daily stand-ups, sprint planning and reviews to keep team aligned on sprint goals.',
                'Managed the backlog and Kanban board in Microsoft Planner; set priorities, owners, and due dates.',
                'Developed and maintained responsive user interfaces with React (and Next.js), delivering 2+ new features per sprint to improve engagement.',
                'Designed and migrated relational database schemas using Prisma ORM and MySQL, ensuring scalable and normalized data structures.',
                'Developed and consumed RESTful APIs with Node.js and Express, integrating them with a MySQL database for full CRUD operations on user data.'
              ],
            current: true
          },
          {
            id: '2',
            title: 'Data Analyst Intern',
            company: 'Luminous Data Solutions, LLC',
            duration: 'July 2024 – Present',
              description: [
                'Executed SQL queries to retrieve, analyze and troubleshoot datasets, supporting both internal teams and external client requests.',
                'Maintained project records by organizing datasets and verifying accuracy for analysis.',
                'Led data preparation and cleaning efforts, transforming raw data into usable formats by identifying and correcting inconsistencies.',
                'Troubleshot network connectivity issues during data transfer processes, ensuring uninterrupted data flow and minimizing downtime.',
                'Conducted data cleaning and preparation to align datasets with project requirements.'
              ],
            current: false
          },
          {
            id: '3',
            title: 'Professional Development Coordinator',
            company: 'Amplify',
            duration: 'Jun 2020 – Oct 2023',
              description: [
                'Coordinated schedules and deliverables for high-value client accounts (avg. ~$250K), ensuring resources were aligned and milestones met.',
                'Built Salesforce dashboards/reports to track KPIs and surface risks; delivered periodic written updates and presentations to leadership.',
                'Monitored SLAs, escalated blockers early, and drove closure with clear ownership and deadlines.',
                'Utilized Operations protocols and CRM tools (e.g. Salesforce) to ensure proper documentation of service calls and emails.',
                'Created a standard process and knowledge base article and best practices for other PD Coordinators.',
                'Leveraged interpersonal skills to maintain excellent relationships with cross functional teams.',
                'Designed and delivered Salesforce training for coordinators covering dashboard and reports; created slide deck, quick-reference guide and recorded walkthrough.',
                'Promoted from Tier 1 Support Specialist to Professional Development Coordinator within 1 year.'
              ],
            current: false
          },
          {
            id: '4',
            title: 'Tier 1 Support Specialist',
            company: 'Amplify',
            duration: 'Jul 2019 – Jun 2020',
              description: [
                'Provided front-line support via phone, chat and email; achieved 95% first-contact resolution while meeting response and resolution SLAs.',
                'Triaged and prioritized inbound tickets; documented clear steps-to-reproduce, case notes, severity/impact, and status in Salesforce.',
                'Performed initial troubleshooting to reproduce issues. Isolate root causes and apply known workarounds; escalated to Tier 2/Engineering with complete context.',
                'Communicated status, next steps and ETAs to users and stakeholders; followed up after fixes to confirm resolution and user satisfaction.',
                'Authored and maintained internal knowledge base articles, troubleshooting guides and response templates to drive consistency and faster resolution.',
                'Contributed to onboarding by shadowing new agents. Demonstrating ticket hygiene standards and sharing best practices for clear, empathetic communication.'
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
      value: '7+'
    },
    {
      icon: Users,
      label: 'Projects Managed',
    value: '15+'
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
            <br className='hidden lg:block' />
            <span className="text-lg font-medium text-blue-700">Project Planning, Analysis, & Creativity</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through roles that have shaped expertise in data analysis, project management, and full-stack development
          </p>
        </div>

        {/* Stats */}
  <div className="flex justify-center items-center gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 w-64 h-56 flex flex-col justify-center items-center"
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