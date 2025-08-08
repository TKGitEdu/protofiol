import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="text-center">
        <h2 className="text-base font-semibold leading-7 text-emerald-400">Education</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">My Academic Background</p>
      </div>
      <div className="mt-12 max-w-2xl mx-auto p-8 bg-neutral-900 rounded-lg">
        <h3 className="text-xl font-semibold text-white">FPT University – Ho Chi Minh City</h3>
        <p className="mt-2 text-white/80">Bachelor of Software Engineering</p>
        <p className="mt-4 text-sm text-white/60">
          <strong className="font-semibold text-white/80">GPA:</strong> 7.5 (as of July 2025)
        </p>
        <p className="mt-1 text-sm text-white/60">
          <strong className="font-semibold text-white/80">Expected Graduation:</strong> 2027
        </p>
      </div>
    </section>
  );
};

export default Education;
