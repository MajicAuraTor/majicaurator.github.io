import React from 'react';
import { User, CheckCircle, Users, Network, AlertTriangle, Zap } from 'lucide-react';
import { PageHeader, Card } from '../components/common';

const Leadership: React.FC = () => {
  const vignettes = [
    {
      title: "Project Recover: The 65-Task Sprint",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      content: `When working on a project with Pulse Consulting, the backlog had grown to 89 incomplete tasks with a looming deadline just three weeks away. Rather than panic, I implemented a triage system: critical (15 tasks), important (25 tasks), and nice-to-have (49 tasks). I personally took ownership of the 15 critical items while redistributing the important tasks across the team based on individual strengths. Through daily standups and removing blockers, we closed 65 tasks in those three weeks—enough to deliver a fully functional MVP that exceeded client expectations. The remaining 24 tasks became Phase 2 scope.`,
      lesson: "Sometimes the best leadership move is knowing what not to do."
    },
    {
      title: "CIVICs: Building Peace of Mind",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      content: `Co-Leading Team "Peace of Mind" in the CIVICs program taught me that innovation happens when you combine personal passion with systematic execution. Our mission was supporting Active Minds' mental health initiatives, but our breakthrough came from recognizing a gap: introverted youth who struggle in traditional support settings. We facilitated design thinking sessions that led us to propose a youth hackathon specifically for mental health solutions—creating a space where quiet innovators could contribute meaningfully. We presented to a panel of judeges and secured the winning title for our pitch.`,
      lesson: "The best ideas emerge when you design for the overlooked."
    },
    {
      title: "Network Navigation with Kevin Rooney",
      icon: <Network className="w-6 h-6 text-purple-600" />,
      content: `My Tea Guest sessions with Kevin Rooney fundamentally shifted how I approach career development. Kevin's core principle—"leverage your connection and relationships"—initially felt transactional to me. But through our conversations, I learned that authentic networking isn't about collecting contacts; it's about creating genuine value exchanges. I started reaching out to AI professionals not to ask for jobs, but to share insights from my experience and learn about their challenges. This approach led to two meaningful mentorship relationships and two collaborative project opportunities.`,
      lesson: "Networking works when you lead with curiosity, not need."
    },
    {
      title: "Stakeholder Alignment in Crisis",
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
      content: `During a critical sprint at Scattrd, miscommunication between our development team and a Fortune 500 client nearly derailed a six-figure contract. The client expected real-time dashboards while we were building batch-processed reports—a fundamental architecture mismatch discovered just days before demo. Instead of pointing fingers, I called an emergency alignment session with both teams. I facilitated a requirements walkthrough that revealed the core issue: different definitions of "real-time." We negotiated a hybrid solution with 15-minute refresh cycles, delivered on schedule, and maintained the relationship.`,
      lesson: "Misalignment is usually a vocabulary problem, not a competency problem."
    },
    {
      title: "Technical Debt Leadership",
      icon: <Zap className="w-6 h-6 text-red-600" />,
      content: `Three months into my tenure at Scattrd, our main analytics pipeline was failing weekly due to accumulated technical shortcuts. The team was spending 40% of their time on firefighting instead of feature development. I made the difficult decision to halt new feature work for two weeks to address the underlying issues. I personally reviewed every critical component, documented the problems, and worked alongside developers to implement proper error handling and monitoring. Short-term client complaints were intense, but long-term reliability improved by 300%, and developer satisfaction scores jumped from 6.2 to 8.7.`,
      lesson: "Sometimes you have to slow down to speed up permanently."
    },
    {
      title: "Cross-Functional Team Building",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      content: `When Scattrd landed our largest client project, I inherited a team of brilliant specialists who had never worked together: a machine learning engineer, two full-stack developers, a data scientist, and a UX researcher. Initial velocity was frustratingly low due to communication gaps and conflicting workflows. I implemented weekly "translation sessions" where each specialist explained their current work in plain English, highlighting dependencies and blockers. These 30-minute sessions reduced project delays by 60% and created genuine camaraderie. Six months later, the team requested to work together on future projects.`,
      lesson: "Great teams aren't born, they're built through deliberate communication."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Leadership"
        subtitle="Leading through challenges, building through collaboration"
        icon={<User className="w-8 h-8" />}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {vignettes.map((vignette, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                {vignette.icon}
                <h3 className="text-xl font-semibold text-gray-900">{vignette.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{vignette.content}</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{vignette.lesson}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;