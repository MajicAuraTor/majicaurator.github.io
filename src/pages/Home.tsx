import { ArrowRight, Download, Github, Linkedin, BarChart3, Users, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Turning complex data into clear, actionable insights'
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Managing workflows to deliver successful outcomes every time'
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications from frontend to backend'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Jatore M. Price
              </h1>
              <div className="text-xl lg:text-2xl text-gray-600 mb-6">
                <span className="text-blue-600 font-semibold">Data Analyst</span>
                <span className="mx-2">|</span>
                <span className="text-teal-600 font-semibold">Technical Project Manager</span>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Translating complex data into strategic decisions and delivering 
                full-stack solutions with clarity and leadership.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/resume.pdf"
                  download="Jatore_Price_Resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/MajicAuraTor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jatore-price/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-300 text-blue-700 font-semibold rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      <BarChart3 className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Analytics Driven</h3>
                      <p className="text-blue-100">Data-informed decision making</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      <Users className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Team Leadership</h3>
                      <p className="text-blue-100">Cross-functional collaboration</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      <Code className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Full Stack</h3>
                      <p className="text-blue-100">End-to-end development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Core Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining analytical thinking with technical execution to drive business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how data-driven insights and strategic project management 
            can accelerate your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;