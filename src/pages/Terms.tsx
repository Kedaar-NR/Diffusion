import React from 'react';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto font-mono text-gray-300">
      <div className="mb-6">
        <Link to="/" className="text-green-500 hover:underline">← cd ..</Link>
      </div>

      <div className="border border-gray-700 p-8 bg-gray-900/50 rounded-sm">
        <h1 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">Terms_of_Service.man</h1>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-emerald-400 font-bold mb-2 uppercase">1. NAME</h2>
            <p>Terms - Conditions of use for App Studio software.</p>
          </section>

          <section>
            <h2 className="text-emerald-400 font-bold mb-2 uppercase">2. USAGE</h2>
            <p>User access to "BibleStudy" and "Caloric" indicates agreement to these terms.</p>
          </section>

          <section>
            <h2 className="text-emerald-400 font-bold mb-2 uppercase">3. LIABILITY</h2>
            <p>Software is provided "AS IS", without warranty of any kind. Bear Strategy Lab is not liable for data loss or calories miscounted.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
