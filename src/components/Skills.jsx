import React from 'react';

const skillsData = [
  {
    category: 'BrSE Fundamentals',
    items: ['Use Case', 'ERD', 'Sequence Diagram', 'System Architecture', 'Functional Specs'],
  },
  {
    category: 'Programming',
    items: ['C#', 'Java', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  { category: 'Frontend', items: ['React', 'Vite'] },
  {
    category: 'Backend',
    items: ['ASP.NET Core', 'REST API', 'Entity Framework Core'],
  },
  { category: 'Database', items: ['PostgreSQL', 'MySQL'] },
  {
    category: 'Testing',
    items: ['Unit', 'Integration', 'E2E', 'API', 'Mobile', 'Lambda', 'AI-assisted'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Visual Studio', 'Docker', 'Swagger', 'Figma', 'Android Studio'],
  },
  { category: 'Languages', items: ['Japanese (A2)'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="text-center">
        <h2 className="text-base font-semibold leading-7 text-emerald-400">My Skills</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Technologies & Competencies</p>
      </div>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
        {skillsData.map((skillSet) => (
          <div key={skillSet.category} className="p-6 bg-neutral-900 rounded-lg">
            <h3 className="text-base font-semibold text-white">{skillSet.category}</h3>
            <ul className="mt-4 space-y-2">
              {skillSet.items.map((item) => (
                <li key={item} className="text-sm text-white/60">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
