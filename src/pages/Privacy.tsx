import React from 'react';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto font-mono text-gray-300 space-y-6">
      <div className="flex items-center gap-3 text-sm">
        <Link to="/" className="text-emerald-400 hover:underline">← cd ..</Link>
        <span className="text-gray-500">/docs/privacy</span>
      </div>

      <div className="panel rounded-xl border border-white/10 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h1 className="text-2xl font-bold text-white tracking-tight">Privacy_Policy.man</h1>
          <span className="text-xs text-gray-400">Last updated Jan 2025</span>
        </div>
        
        <div className="space-y-5 text-sm leading-relaxed">
          <section>
            <h2 className="text-emerald-400 font-semibold mb-2 uppercase">1. NAME</h2>
            <p>Privacy Policy — Declaration of data handling practices for Diffusion applications.</p>
          </section>

          <section>
            <h2 className="text-emerald-400 font-semibold mb-2 uppercase">2. SYNOPSIS</h2>
            <p>Diffusion respects user privacy. No personal data is collected without explicit consent.</p>
          </section>
          
          <section>
            <h2 className="text-emerald-400 font-semibold mb-2 uppercase">3. DESCRIPTION</h2>
            <p>Apps like BibleStudy and Caloric operate locally where possible. When network features are used, we minimize retention and only process data to deliver requested functionality.</p>
          </section>
          
          <section>
             <h2 className="text-emerald-400 font-semibold mb-2 uppercase">4. CONTACT</h2>
             <p>Questions? Email <a href="mailto:team@bearstrategy.org" className="text-emerald-300 hover:text-emerald-200">team@bearstrategy.org</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
