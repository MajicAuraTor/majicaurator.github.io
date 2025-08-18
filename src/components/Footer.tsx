import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Jatore Price</h3>
            <p className="text-gray-300 mb-4">
              Data Analyst and Technical Project Manager with a passion for transforming complex data into strategic insights and delivering full-stack solutions that drive innovation and impact.
            </p>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Chicago, IL</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Me
              </a>
              <a href="/projects" className="block text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="/experience" className="block text-gray-300 hover:text-white transition-colors">
                Experience
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jatore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/jatore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:jatore@example.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Jatore Price. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;