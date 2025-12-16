import React from 'react';
import { Code, Database, Server, Globe, GitBranch, Zap, Keyboard, Bot } from 'lucide-react';
import { PageHeader, Card } from '../components/common';

const Technology: React.FC = () => {
  const sernStack = [
    {
      title: "SQL Server",
      icon: <Database className="w-6 h-6 text-blue-600" />,
      items: [
        "Designed normalized database schema for manufacturing equipment data",
        "Implemented stored procedures for complex aggregations (99th percentile response times)",
        "Used SQL Agent jobs for automated data archiving and cleanup",
        "Optimized queries resulting in 40% faster dashboard load times"
      ]
    },
    {
      title: "Express.js",
      icon: <Server className="w-6 h-6 text-green-600" />,
      items: [
        "Built RESTful API with JWT authentication and role-based authorization",
        "Implemented rate limiting and input validation for production security",
        "Created automated API documentation with Swagger/OpenAPI",
        "Deployed with PM2 for process management and zero-downtime updates"
      ]
    },
    {
      title: "React",
      icon: <Globe className="w-6 h-6 text-cyan-600" />,
      items: [
        "Developed responsive dashboard components with React Hooks and Context API",
        "Integrated Chart.js for real-time data visualization with WebSocket connections",
        "Implemented optimistic updates for better perceived performance",
        "Built custom loading states and error boundaries for improved UX"
      ]
    },
    {
      title: "Node.js",
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      items: [
        "Created background services for data ingestion from IoT sensors",
        "Implemented message queuing with Redis for handling high-volume sensor data",
        "Built custom middleware for logging, monitoring, and performance tracking",
        "Deployed to AWS EC2 with Docker containers and nginx load balancing"
      ]
    }
  ];

  const tools = [
    {
      category: "Development",
      items: "VS Code with ESLint/Prettier, Postman for API testing, Docker for local environment consistency"
    },
    {
      category: "Database",
      items: "SQL Server Management Studio, Azure Data Studio for query optimization"
    },
    {
      category: "Cloud",
      items: "AWS (EC2, RDS, CloudWatch), Azure DevOps for CI/CD pipelines"
    },
    {
      category: "Monitoring",
      items: "New Relic for application performance, custom Slack alerts for critical issues"
    },
    {
      category: "Collaboration",
      items: "GitHub for code, Notion for documentation, Figma for UI mockups"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Technology"
        subtitle="Building scalable solutions with modern tools and practices"
        icon={<Code className="w-8 h-8" />}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* SERN Stack */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">SERN Stack Walkthrough</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sernStack.map((tech, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-4">
                  {tech.icon}
                  <h3 className="text-lg font-semibold text-gray-900">{tech.title}</h3>
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Version Control */}
        <Card className="p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <GitBranch className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Version Control Proof</h2>
          </div>
          
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div className="mb-2"><span className="text-blue-400">Branch:</span> feature/predictive-maintenance-alerts</div>
            <div className="mb-2"><span className="text-blue-400">PR Description:</span> "Implements machine learning model for predicting equipment failures 24-48 hours in advance. Includes model training pipeline, real-time prediction API endpoint, and dashboard alert components. Addresses issues #47, #52, and #61."</div>
            <div className="mb-2"><span className="text-blue-400">Code Review:</span> 3 approvals, 12 commits, 847 lines added, 23 lines deleted</div>
            <div><span className="text-blue-400">Deployment:</span> Merged to main, auto-deployed to staging, manual promotion to production after UAT approval</div>
          </div>
        </Card>

        {/* Tools in Practice */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools in Practice</h2>
          <div className="space-y-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center">
                <div className="font-semibold text-gray-900 w-32 mb-2 sm:mb-0">{tool.category}:</div>
                <div className="text-gray-700">{tool.items}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Additional Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Keyboard className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-900">Typing Speed Progress</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Improved from <span className="font-semibold text-red-600">40 WPM</span> to <span className="font-semibold text-green-600">58 WPM</span> over 6 months using Keybr.com and TypingClub.
            </p>
            <p className="text-gray-600 text-sm">
              Focused on accuracy first, then speed. Most improvement came from learning proper finger positioning and eliminating the "hunt and peck" habits from my early programming days.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Bot className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">AI Assistant Bot</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Built a Slack bot using OpenAI's API to help team members with code reviews and documentation.
            </p>
            <p className="text-gray-600 text-sm">
              Bot can explain code snippets, suggest improvements, and generate unit test templates. Reduced average code review time from 45 minutes to 28 minutes while maintaining quality standards.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Technology;