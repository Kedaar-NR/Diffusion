import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto font-mono text-gray-300 space-y-6">
      <div className="panel rounded-xl border border-white/10 p-6 sm:p-8 space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">404</p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">Path not found</h1>
        <p className="text-sm text-gray-400">The command you are looking for does not exist.</p>
        <div className="flex justify-center">
          <Link to="/" className="px-4 py-2 rounded-lg bg-emerald-400/15 text-emerald-200 border border-emerald-400/40 hover:bg-emerald-400/25 transition-colors text-sm">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
};
