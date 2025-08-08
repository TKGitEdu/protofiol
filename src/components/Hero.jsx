import React from 'react';

const Hero = () => {
  return (
    // The main container for the Hero section is now in home.jsx or _layout.jsx
    // We will add padding and centering there. This component is now more modular.
    // NOTE: The user's new layout uses a dark theme. These classes reflect that.
    <div className="text-center py-20 sm:py-32">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
        Đặng Quốc Tâm
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-emerald-300">
        Aspiring Bridge System Engineer | Connecting Japan & Development Teams
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#projects"
          className="rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-neutral-950 shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-colors"
        >
          View Projects
        </a>
        <a href="#contact" className="text-sm font-semibold leading-6 text-white/80 hover:text-white transition-colors">
          Contact me <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
