import React, { useState } from 'react';

const planSections = [
  {
    title: 'North Star (by Day 90)',
    content: [
      '1 job offer/interview loop',
      '2 certs',
      '3 solid portfolio pieces',
      '20 warm relationships'
    ]
  },
  {
    title: 'Choose Your Lane (fast)',
    content: [
      'Use a 2-week Decision Sprint to sample roles before you lock in a lane for applications.',
      'Lane options: Data Analyst, Analytics Engineer, Data Engineer, ML/GenAI Engineer, AI/Data-savvy PM/PO.'
    ]
  },
  {
    title: '30/60/90 Roadmap',
    content: [
      'Days 0–30 — Foundation',
      'Days 31–60 — Execution',
      'Days 61–90 — Conversion'
    ]
  },
  {
    title: 'Certification Menu',
    content: [
      'AI-900 Azure AI Fundamentals',
      'DP-900 Azure Data Fundamentals',
      'PL-300 Power BI Data Analyst',
      'AZ-900 Azure Fundamentals or AWS Cloud Practitioner',
      'Databricks Lakehouse Fundamentals',
      'dbt Fundamentals'
    ]
  },
  {
    title: 'Portfolio: 3-Project Pack',
    content: [
      'P1 — Recover Care Analytics (Analyst/AE)',
      'P2 — Data Pipeline to Warehouse (DE/AE)',
      'P3 — GenAI RAG Assistant (ML/GenAI)'
    ]
  },
  {
    title: 'Networking & Volunteering',
    content: [
      'Chi Hack Night, PyData Chicago, MLOps/GenAI meetups, Women in Data, i.c.stars alumni, university AI labs’ public talks.',
      'Volunteer roles: Analytics for ops, Backlog grooming, Data quality sweeps, Mini PM for a small data initiative.'
    ]
  },
  {
    title: 'Job Search System',
    content: [
      'Titles to search by lane',
      'Resume micro-variants',
      'Tracker fields',
      'Interview Prep (stories to practice)'
    ]
  },
  {
    title: 'Weekly Operating Rhythm',
    content: [
      'Mon – Applications & tailoring',
      'Tue – Learning blocks (certs)',
      'Wed – Networking',
      'Thu – Portfolio/Volunteer',
      'Fri – Mock interviews',
      'Sun – Plan & reset'
    ]
  },
  {
    title: 'KPIs & OKRs (90 days)',
    content: [
      'O1: Break in',
      'O2: Validate skills',
      'O3: Show receipts',
      'O4: Build community'
    ]
  },
  {
    title: 'Your Immediate Next 10 Actions',
    content: [
      'Pick your lane + choose 2 certifications',
      'Block 6 study hours on calendar',
      'Stand up a job tracker',
      'Draft LinkedIn headline',
      'Start Portfolio P1 and outline the README',
      'DM 3 organizers/mentors',
      'Apply to 10 roles',
      'Schedule 2 mock interviews',
      'Write a 1-page case study skeleton',
      'Book Cert #1 exam date'
    ]
  }
];

const ProjectPlan: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Post‑i.c.stars AI & Data Career Playbook (90‑Day Plan)</h1>
      <div className="text-center mb-6 text-lg text-gray-700">Owner: Jatore M. Price</div>
      <div className="text-center mb-8 text-gray-600">Goal: Land a role in AI/Data (Analyst, Analytics Engineer, Data Engineer, ML/GenAI Engineer, or AI‑adjacent PM/PO) while earning 1–2 fundamentals certifications, shipping 2–3 portfolio projects, and building a tight network.</div>
      <div className="mb-10 text-center text-blue-700 font-semibold">North Star: 1 job offer/interview loop + 2 certs + 3 solid portfolio pieces + 20 warm relationships.</div>
      <div className="space-y-4">
        {planSections.map((section, idx) => (
          <div key={section.title}>
            <button
              className={`w-full text-left px-4 py-3 rounded-lg border font-semibold transition-colors duration-200 ${activeSection === idx ? 'bg-blue-100 border-blue-400' : 'bg-white border-gray-300 hover:bg-blue-50'}`}
              onClick={() => setActiveSection(activeSection === idx ? null : idx)}
            >
              {section.title}
            </button>
            {activeSection === idx && (
              <div className="pl-6 pr-2 py-3 text-gray-800 bg-white border-l-4 border-blue-400">
                <ul className="list-disc ml-4">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPlan;
