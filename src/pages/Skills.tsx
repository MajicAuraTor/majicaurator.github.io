import { Code, Database, BarChart3, Settings, Users, Zap, ArrowRight, ArrowLeft } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Full Stack Development',
      color: 'from-blue-600 to-blue-700',
      skills: [
  { name: 'React', desc: 'Expert in building dynamic, responsive web apps using React. Experience with hooks, context, and advanced state management.' },
  { name: 'TypeScript', desc: 'Skilled in TypeScript for scalable, maintainable codebases. Strong understanding of types, interfaces, and generics.' },
  { name: 'Node.js', desc: 'Developed robust backend APIs and real-time services with Node.js. Familiar with event-driven architecture and async programming.' },
  { name: 'Express.js', desc: 'Built RESTful APIs and middleware with Express.js. Experience in authentication, routing, and error handling.' },
  { name: 'MySQL', desc: 'Designed and managed relational databases with MySQL. Skilled in schema design, queries, and performance optimization.' },
  { name: 'Tailwind CSS', desc: 'Created beautiful, responsive UIs using Tailwind CSS. Custom themes, utility classes, and rapid prototyping.' }
      ]
    },
    {
      icon: BarChart3,
      title: 'Data & Analysis',
      color: 'from-teal-600 to-teal-700',
      skills: [
  { name: 'SQL', desc: 'Advanced SQL skills for data analysis, reporting, and ETL. Experience with joins, subqueries, and performance tuning.' },
  { name: 'Power BI', desc: 'Developed interactive dashboards and reports in Power BI. Skilled in DAX, data modeling, and visualization best practices.' },
  { name: 'Excel', desc: 'Expert in Excel for data analysis, automation (VBA), and complex formulas. Built financial models and pivot tables.' },
  { name: 'Prisma ORM', desc: 'Implemented type-safe database access with Prisma ORM. Experience in schema design, migrations, and query optimization.' },
  { name: 'Data Visualization', desc: 'Transformed raw data into compelling visuals using tools like Power BI, Chart.js, and D3.js.' },
  { name: 'Statistical Analysis', desc: 'Applied statistical methods to uncover trends, correlations, and actionable insights from data.' }
      ]
    },
    {
      icon: Settings,
      title: 'Project Tools',
      color: 'from-orange-600 to-orange-700',
      skills: [
  { name: 'Git', desc: 'Managed codebases with Git, branching strategies, and pull requests. Resolved merge conflicts and maintained clean commit history. View my work: https://github.com/MajicAuraTor' },
  { name: 'GitHub Actions', desc: 'Automated testing, deployment, and workflows using GitHub Actions. Experience with custom pipelines and secrets management.' },
  { name: 'Notion', desc: 'Organized documentation, project plans, and team knowledge bases using Notion.' },
  { name: 'Salesforce', desc: 'Configured and customized Salesforce for business automation, reporting, and CRM solutions.' },
  { name: 'CI/CD', desc: 'Set up CI/CD pipelines for automated builds, tests, and deployments. Familiar with tools like Jenkins, GitHub Actions, and Azure DevOps.' },
  { name: 'Planner', desc: 'Organized tasks and projects using Microsoft Planner. Ensured timely delivery and clear communication.' }
      ]
    },
    {
      icon: Users,
      title: 'Leadership & Soft Skills',
      color: 'from-purple-600 to-purple-700',
      skills: [
  { name: 'Team Leadership', desc: 'Successfully led cross-functional teams, mentored junior members, and fostered a collaborative work environment.' },
  { name: 'Agile Methodology', desc: 'Applied agile principles for iterative delivery, continuous improvement, and adaptive planning.' },
  { name: 'Stakeholder Management', desc: 'Built strong relationships with stakeholders, managed expectations, and delivered on business goals.' },
  { name: 'Strategic Planning', desc: 'Developed and executed strategic plans to achieve long-term objectives and drive organizational growth.' },
  { name: 'Communication', desc: 'Excellent communicator, able to convey complex ideas clearly to technical and non-technical audiences.' },
  { name: 'Problem Solving', desc: 'Proven ability to analyze challenges, identify root causes, and implement effective solutions.' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      year: '2024'
    },
    {
      title: 'Google Project Management',
      issuer: 'Google',
      year: '2024'
    },
    {
      title: 'Data Camp SQL Associate',
      issuer: 'Data Camp',
      year: '2025'
    }
  ];

  // Demo 1: Featured Skill Carousel
  const featuredSkills = [
    { name: 'React', icon: Code, blurb: 'Building interactive UIs with React.' },
    { name: 'SQL', icon: Database, blurb: 'Managing and analyzing data with SQL.' },
    { name: 'Team Leadership', icon: Users, blurb: 'Leading teams to success.' }
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Demo 2: Flip Card State
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skill Highlights - moved to top */}
        {/* Header - Skills */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            A showcase of impactful projects that demonstrate expertise in data analysis, 
            full-stack development, and strategic project management
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-3 rounded inline-block">
            <span className="font-semibold">Note:</span> You can click any skill badge below to see a detailed description.
          </div>
        </div>
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Database className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">7+</h3>
                <p className="text-blue-100">Years of Experience</p>
              </div>
              <div>
                <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">15+</h3>
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

        {/* Skills as Clickable Animated Badges by Category */}
        <div className="mb-20 space-y-10">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            // Local state for each category
            const [activeSkill, setActiveSkill] = useState<number | null>(null);
            const containerRef = useRef<HTMLDivElement>(null);

            // Hide description when clicking outside
            useEffect(() => {
              function handleClickOutside(event: MouseEvent) {
                if (containerRef.current && event.target instanceof Node && !containerRef.current.contains(event.target)) {
                  setActiveSkill(null);
                }
              }
              document.addEventListener('mousedown', handleClickOutside);
              return () => {
                document.removeEventListener('mousedown', handleClickOutside);
              };
            }, []);

            return (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6" ref={containerRef}>
                <div className="flex items-center mb-4">
                  <Icon className="h-8 w-8 mr-3 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  {category.skills.map((skill, skillIndex) => (
                    <button
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow-md focus:outline-none transition-all duration-200 ${activeSkill === skillIndex ? 'ring-4 ring-pink-400 scale-105 bg-gradient-to-r from-pink-400 to-purple-500' : ''}`}
                      onClick={() => setActiveSkill(activeSkill === skillIndex ? null : skillIndex)}
                    >
                      {skill.name}
                    </button>
                  ))}
                </div>
                {/* Reserve space to prevent layout jump */}
                <div style={{ minHeight: '2.5rem' }}>
                  {activeSkill !== null && (
                    <div className="bg-pink-50 rounded-lg p-4 text-pink-700 shadow-inner transition-all duration-200">
                      {category.skills[activeSkill].desc}
                    </div>
                  )}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
};

export default Skills;