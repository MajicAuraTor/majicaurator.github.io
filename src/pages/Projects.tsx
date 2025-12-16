import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  role: string;
  outcome: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // In a real app, this would fetch from your backend API
        // For now, we'll use mock data
        const mockProjects: Project[] = [
          {
            id: '1',
            title: 'Power BI Dashboard',
            description: 'Comprehensive data visualization dashboard that transformed raw business data into actionable insights, resulting in 30% improvement in decision-making speed.',
            tools: ['Power BI', 'SQL', 'Excel', 'DAX'],
            role: 'Data Analyst',
            outcome: 'Revealed seasonal sales peaks and product profitability trends to drive strategic business decisions.',
            image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
            featured: true
          },
          {
            id: '2',
            title: 'Recover App (Full Stack)',
            description: 'Complete CRUD application built with React, Express.js, and MySQL featuring user authentication, role-based access, dark mode, and responsive design.',
            tools: ['React', 'TypeScript', 'Express.js', 'MySQL', 'Tailwind CSS'],
            role: 'Full Stack Developer',
            outcome: 'Successfully delivered scalable web application with 99.9% uptime.',
            image: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=800',
            githubUrl: 'https://github.com/MajicAuraTor/RecoverApp',
            liveUrl: 'https://recover-app.vercel.app',
            featured: true
          },
          {
            id: '3',
            title: 'Project Manager Case Study',
            description: 'Led cross-functional team in delivering strategic technology solutions for enterprise client, managing project timeline and stakeholder communications.',
            tools: ['Planner', 'Salesforce', 'Power BI', 'Project Management'],
            role: 'Project Manager',
            outcome: 'Enabled seamless collaboration and project delivery by implementing agile practices and clear communication, resulting in improved team efficiency and stakeholder satisfaction.',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
            featured: true
          }
        ];
        setProjects(mockProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of impactful projects that demonstrate expertise in data analysis, 
            full-stack development, and strategic project management
          </p>
        </div>

  {/* ...existing code... */}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Work</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={false} />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
            <p className="text-xl text-blue-100 mb-6">
              Let's discuss how we can work together on your next project
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get In Touch
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; featured: boolean }> = ({ project, featured }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${featured ? 'border-2 border-yellow-200' : 'border border-gray-200'}`}>
      {project.image && (
        <div className="relative h-48 bg-gray-200">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {featured && (
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Featured
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-blue-600 font-medium mb-3">{project.role}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        {/* Tools */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        {/* Outcome */}
        <div className="mb-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800 font-medium">
            <strong>Impact:</strong> {project.outcome}
          </p>
        </div>
        {/* View Project Plan Button for Project Manager Case Study */}
        {project.title === 'Project Manager Case Study' && (
          <div className="mb-4">
            <a
              href="/project-plan"
              className="flex items-center px-3 py-2 text-purple-700 hover:text-purple-900 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Project Plan
            </a>
          </div>
        )}
        
        {/* Links */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          )}
          {/* Custom Live Demo for Power BI Dashboard */}
          {project.title === 'Power BI Dashboard' ? (
            <a
              href="/powerbidemodemo"
              className="flex items-center px-3 py-2 text-blue-600 hover:text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          ) : project.title === 'Project Management Case Study' ? (
            <a
              href="/project-plan"
              className="flex items-center px-3 py-2 text-purple-700 hover:text-purple-900 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Project Plan
            </a>
          ) : project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-blue-600 hover:text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;