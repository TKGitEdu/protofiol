import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-neutral-900">
      <div className="text-center">
        <h2 className="text-base font-semibold leading-7 text-emerald-400">Get In Touch</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's Connect</p>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-white/70">
          I'm currently seeking new opportunities. Feel free to reach out via email or connect with me on social media.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-8">
          <a href="mailto:quoc.tam.dev@email.com" className="font-semibold text-emerald-400 hover:text-emerald-300">
            quoc.tam.dev@email.com
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 hover:text-emerald-300">
            LinkedIn
          </a>
          <a href="https://github.com/TKGitEdu" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 hover:text-emerald-300">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
