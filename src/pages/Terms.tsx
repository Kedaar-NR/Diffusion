import React from 'react';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto font-mono text-gray-300 space-y-6">
      <div className="flex items-center gap-3 text-sm">
        <Link to="/" className="text-emerald-400 hover:underline">← cd ..</Link>
        <span className="text-gray-500">/docs/terms</span>
      </div>

      <div className="panel rounded-xl border border-white/10 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h1 className="text-2xl font-bold text-white tracking-tight">Terms_of_Service.man</h1>
          <span className="text-xs text-gray-400">Last updated Jan 2025</span>
        </div>
        
        <div className="space-y-5 text-sm leading-relaxed">
          <section>
            <h2 className="text-emerald-400 font-semibold mb-2 uppercase">1. NAME</h2>
            <p>Terms — Conditions of use for Diffusion software and services.</p>
          </section>

          <section>
            <h2 className="text-emerald-400 font-semibold mb-2 uppercase">2. USAGE</h2>
            <p>Accessing apps like BibleStudy and Caloric indicates agreement to these terms. You agree not to misuse or reverse engineer the services.</p>
          </section>

          <section>
            <h2 className="text-emerald-400 font-semibold mb-2 uppercase">3. LIABILITY</h2>
            <p>Software is provided "AS IS", without warranty of any kind. Bear Strategy Lab and Diffusion are not liable for data loss, calories miscounted, or missed goals.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
