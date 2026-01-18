import React from 'react';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto font-mono text-gray-300">
      <div className="mb-6">
        <Link to="/" className="text-green-500 hover:underline">← cd ..</Link>
      </div>
      
      <div className="border border-gray-700 p-8 bg-gray-900/50 rounded-sm">
        <h1 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">Privacy_Policy.man</h1>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-emerald-400 font-bold mb-2 uppercase">1. NAME</h2>
            <p>Privacy Policy - Declaration of data handling practices for App Studio applications.</p>
          </section>

          <section>
            <h2 className="text-emerald-400 font-bold mb-2 uppercase">2. SYNOPSIS</h2>
            <p>App Studio respects user privacy. No personal data is collected without explicit consent.</p>
          </section>
          
           <section>
            <h2 className="text-emerald-400 font-bold mb-2 uppercase">3. DESCRIPTION</h2>
            <p>This utility (App Studio) manages user data with strict confidentiality. Applications "BibleStudy" and "Caloric" operate locally where possible.</p>
          </section>
          
          <section>
             <h2 className="text-emerald-400 font-bold mb-2 uppercase">4. AUTHOR</h2>
             <p>Bear Strategy Lab.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
