import { Code, Database, BarChart3, Settings, Users, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Full Stack Development',
      color: 'from-blue-600 to-blue-700',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Tailwind CSS', level: 92 }
      ]
    },
    {
      icon: BarChart3,
      title: 'Data & Analysis',
      color: 'from-teal-600 to-teal-700',
      skills: [
        { name: 'SQL', level: 95 },
        { name: 'Power BI', level: 88 },
        { name: 'Excel', level: 90 },
        { name: 'Prisma ORM', level: 80 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Statistical Analysis', level: 78 }
      ]
    },
    {
      icon: Settings,
      title: 'Project Tools',
      color: 'from-orange-600 to-orange-700',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'JIRA', level: 88 },
        { name: 'Salesforce', level: 75 },
        { name: 'CI/CD', level: 78 },
        { name: 'Planner', level: 85 }
      ]
    },
    {
      icon: Users,
      title: 'Leadership & Soft Skills',
      color: 'from-purple-600 to-purple-700',
      skills: [
        { name: 'Team Leadership', level: 90 },
        { name: 'Agile Methodology', level: 88 },
        { name: 'Stakeholder Management', level: 92 },
        { name: 'Strategic Planning', level: 85 },
        { name: 'Communication', level: 95 },
        { name: 'Problem Solving', level: 90 }
      ]
    }
  ];

  const certifications = [
    {
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      year: '2023'
    },
    {
      title: 'Project Management Professional (PMP)',
      issuer: 'PMI',
      year: '2022'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      title: 'Scrum Master Certification',
      issuer: 'Scrum Alliance',
      year: '2022'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of technical skills, tools, and competencies 
            developed through hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center text-white">
                    <Icon className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-lg text-gray-600">
              Professional certifications that validate expertise and commitment to continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500">
                    {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Highlights */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Database className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">5+</h3>
                <p className="text-blue-100">Years of Data Analysis Experience</p>
              </div>
              <div>
                <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-blue-100">Projects Successfully Managed</p>
              </div>
              <div>
                <Code className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-blue-100">Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;