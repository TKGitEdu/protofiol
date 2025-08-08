import React from 'react';

const projectData = [
  {
    title: 'Infertility Treatment Management System',
    description: 'A comprehensive system for managing infertility treatment processes, connecting patients with healthcare providers.',
    imagePlaceholder: 'Screenshot of Management System',
    liveLink: 'https://fe-hiemmuon.onrender.com/',
    githubLinks: [
      { name: 'Frontend', url: 'https://github.com/TKGitEdu/FE_hiemmuon' },
      { name: 'Backend', url: 'https://github.com/TKGitEdu/Infertility-Treatment-Managements' },
    ],
  },
  {
    title: 'Software Testing Demos',
    description: 'A collection of demonstration projects for various testing methodologies, including API, Mobile, E2E, and AI-assisted testing.',
    imagePlaceholder: 'Testing Demos Logo',
    liveLink: null,
    githubLinks: [
      { name: 'GitHub', url: 'https://github.com/TKGitEdu/software-testing-demos' },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-neutral-900">
      <div className="text-center">
        <h2 className="text-base font-semibold leading-7 text-emerald-400">Featured Projects</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">What I've Been Working On</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <div key={project.title} className="group relative flex flex-col overflow-hidden rounded-lg bg-neutral-800/50 border border-white/10 transition-all hover:bg-neutral-800">
            <div className="h-48 bg-neutral-700 flex items-center justify-center text-white/50">
              {project.imagePlaceholder}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-white/60 flex-grow">{project.description}</p>
              <div className="mt-6 flex gap-4">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
                    Live Demo
                  </a>
                )}
                {project.githubLinks.map(link => (
                   <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
