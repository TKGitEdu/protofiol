import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-neutral-900">
      <div className="text-center">
        <h2 className="text-base font-semibold leading-7 text-emerald-400">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-white/70">
          Aspiring to become a Bridge System Engineer (BrSE), applying IT knowledge and Japanese language skills to effectively connect Japanese clients with development teams.
        </p>
        <div className="mt-10 flex justify-center gap-4 sm:gap-8 flex-wrap">
          <div className="text-center">
            <div className="text-2xl font-bold tracking-tight text-white">FPT University</div>
            <div className="text-base leading-7 text-white/60">Student</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold tracking-tight text-white">7.5 GPA</div>
            <div className="text-base leading-7 text-white/60">(Current)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold tracking-tight text-white">5 / 9</div>
            <div className="text-base leading-7 text-white/60">Semesters Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
