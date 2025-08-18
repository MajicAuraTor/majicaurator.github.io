import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Seed projects
  const projects = [
    {
      title: 'Power BI Dashboard',
      description: 'Comprehensive data visualization dashboard that transformed raw business data into actionable insights, resulting in 30% improvement in decision-making speed.',
      tools: JSON.stringify(['Power BI', 'SQL', 'Excel', 'DAX']),
      role: 'Data Analyst',
      outcome: 'Increased data-driven decisions by 30% and reduced reporting time by 50%',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Recover App (Full Stack)',
      description: 'Complete CRUD application built with React, Express.js, and PostgreSQL featuring user authentication, role-based access, dark mode, and responsive design.',
      tools: JSON.stringify(['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Tailwind CSS']),
      role: 'Full Stack Developer',
      outcome: 'Successfully delivered scalable web application with 99.9% uptime',
      image: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/jatore',
      liveUrl: 'https://recover-app.vercel.app',
      featured: true
    },
    {
      title: 'Pulse Consulting Case Study',
      description: 'Led cross-functional team in delivering strategic technology solutions for enterprise client, managing project timeline and stakeholder communications.',
      tools: JSON.stringify(['JIRA', 'Salesforce', 'Power BI', 'Project Management']),
      role: 'Technical Project Manager',
      outcome: 'Delivered project 2 weeks ahead of schedule with 95% client satisfaction',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    }
  ];

  for (const project of projects) {
    const existingProject = await prisma.project.findFirst({
      where: { title: project.title }
    });
    
    if (!existingProject) {
      await prisma.project.create({
        data: project
      });
    }
  }

  // Seed experiences
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Pulse Consulting',
      duration: '2023 - Present',
      description: JSON.stringify([
        'Developed automated reporting systems that reduced manual work by 60%',
        'Led data migration projects for enterprise clients',
        'Created interactive dashboards for executive leadership'
      ]),
      current: true,
      order: 1
    },
    {
      title: 'Technical Project Manager',
      company: 'i.c.stars',
      duration: '2022 - 2023',
      description: JSON.stringify([
        'Managed full-stack development projects from conception to deployment',
        'Coordinated cross-functional teams of 8+ developers and designers',
        'Implemented Agile methodologies resulting in 40% faster delivery'
      ]),
      order: 2
    },
    {
      title: 'Business Analyst',
      company: 'Luminus Data Solutions',
      duration: '2021 - 2022',
      description: JSON.stringify([
        'Analyzed business requirements and translated them into technical specifications',
        'Optimized data workflows resulting in 25% efficiency gains',
        'Collaborated with stakeholders to define project scope and deliverables'
      ]),
      order: 3
    },
    {
      title: 'Junior Developer',
      company: 'Amplify',
      duration: '2020 - 2021',
      description: JSON.stringify([
        'Built responsive web applications using React and Node.js',
        'Participated in code reviews and maintained high code quality standards',
        'Contributed to open-source projects and internal tooling'
      ]),
      order: 4
    }
  ];

  for (const experience of experiences) {
    await prisma.experience.create({
      data: experience
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });