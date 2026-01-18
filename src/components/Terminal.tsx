import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Command {
  cmd: string;
  output: React.ReactNode;
  delay?: number;
}

const apps = [
  { name: 'BibleStudy', version: 'v1.2.0', category: 'Education', status: 'Stable', blurb: 'Guided reading with AI insights, rooms, and shareable notes.', media: '/8333185-hd_1080_1080_30fps.mp4' },
  { name: 'Caloric', version: 'v2.0.1', category: 'Health', status: 'Scaling', blurb: 'Frictionless nutrition tracking with smart prompts and analytics.', media: '/8419548-hd_1080_1080_30fps.mp4' },
  { name: 'Diffusion Labs', version: 'v0.3.0', category: 'Experiments', status: 'In flight', blurb: 'Internal prototypes for growth, ops, and product validation.' }
];

const services = [
  { title: 'Product strategy', detail: 'Narrative, brief, and roadmap with measurable checkpoints.' },
  { title: 'Design + build', detail: 'Shipping-grade React frontends and API layers delivered in sprints.' },
  { title: 'Growth loops', detail: 'Instrumentation, funnels, and partner integrations that compound.' },
  { title: 'Founder tools', detail: 'Dashboards, automations, and internal tooling for speed.' }
];

const updates = [
  { date: 'Jan 2025', text: 'Terminal experience shipped for Diffusion landing.' },
  { date: 'Dec 2024', text: 'Caloric 2.0 hits daily active goal with new logging flow.' },
  { date: 'Nov 2024', text: 'BibleStudy rooms reach 1k weekly active groups.' },
];

const commands: Command[] = [
  {
    cmd: 'ssh diffusion.app',
    output: (
      <div className="space-y-2 text-sm text-gray-300">
        <p className="text-emerald-400">establishing secure channel...</p>
        <p className="text-white">connected to Diffusion node</p>
        <p className="text-gray-400">auth: Bear Strategy Lab</p>
      </div>
    ),
    delay: 400
  },
  {
    cmd: 'whoami',
    output: (
      <div className="mb-4 flex items-center gap-3">
        <div className="flex items-start justify-center w-16 h-16">
          <Logo className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-white font-bold block text-xl tracking-tight">Diffusion</span>
          <p className="text-gray-300 text-sm leading-relaxed">
            We build and deploy software like shipping a commit: small, testable, and fast to iterate.
          </p>
          <span className="text-gray-500 text-xs mt-1">ran by <a href="https://bearstrategy.org" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline text-xs">Bear Strategy Lab</a></span>
        </div>
      </div>
    ),
    delay: 500
  },
  {
    cmd: 'cat mission.txt',
    output: (
      <div className="mb-4 text-gray-300">
        <p className="mb-2 text-white font-bold text-lg">Deploying ideas at agency selectivity, product-team speed.</p>
        <p className="text-sm leading-relaxed">We ship viral, high-earning apps by keeping scopes thin, feedback loops tight, and launch cycles weekly.</p>
      </div>
    ),
    delay: 1000
  },
  {
    cmd: 'ls ./apps',
    output: (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm font-medium">
        {apps.map((app) => (
          <div key={app.name} className="relative overflow-hidden p-4 rounded-2xl border border-white/10 bg-white/5 flex flex-col gap-2 cursor-default group transition-all hover:border-white/20 min-h-[160px]">
            {app.media && (
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-45 transition-opacity z-0">
                <source src={app.media} type="video/mp4" />
              </video>
            )}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <span className="block text-white text-lg group-hover:scale-105 transition-transform drop-shadow-md font-bold">{app.name}</span>
              <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/40">{app.status}</span>
            </div>
            <span className="relative z-10 text-gray-200 text-[11px]">{app.version} • {app.category}</span>
            <p className="relative z-10 text-gray-100 text-xs leading-tight drop-shadow-lg font-medium">{app.blurb}</p>
          </div>
        ))}
      </div>
    ),
    delay: 1500
  },
  {
    cmd: 'ls ./services',
    output: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
        {services.map((svc) => (
          <div key={svc.title} className="p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
              <span className="text-white font-semibold">{svc.title}</span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">{svc.detail}</p>
          </div>
        ))}
      </div>
    ),
    delay: 2200
  },
  {
    cmd: 'cat ./process.md',
    output: (
      <div className="mb-4 text-sm text-gray-300 space-y-3">
        <p>Pipeline for new products:</p>
        <ol className="list-decimal pl-5 space-y-1 text-gray-200">
          <li>Blueprint — narrow scope, define success, align on timeboxes.</li>
          <li>Build — ship the smallest lovable surface, instrument everything.</li>
          <li>Launch — roll out safely, gather signals, tighten feedback loops.</li>
          <li>Iterate — weekly patches and experiments until it compounds.</li>
        </ol>
      </div>
    ),
    delay: 3000
  },
  {
    cmd: 'tail -n 3 ./updates.log',
    output: (
      <div className="space-y-2 text-sm">
        {updates.map((item) => (
          <div key={item.text} className="flex items-start gap-3 text-gray-300">
            <span className="text-emerald-300 text-xs">{item.date}</span>
            <p className="text-gray-200">{item.text}</p>
          </div>
        ))}
      </div>
    ),
    delay: 3500
  },
  {
    cmd: 'cat ./contact.txt',
    output: (
      <div className="mb-4 text-sm text-gray-300 space-y-2">
        <p>Say hi: <a href="mailto:hello@diffusion.app" className="text-emerald-300 hover:text-emerald-200">hello@diffusion.app</a></p>
        <p>Book a sprint or teardown and we will follow up inside 24 hours.</p>
        <div className="pt-2 text-xs text-gray-400">
          <p>Use of this system is subject to:</p>
          <ul className="list-none pl-0 mt-2 space-y-1">
            <li>- <Link to="/privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</Link></li>
            <li>- <Link to="/terms" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    ),
    delay: 4300
  }
];

export const Terminal: React.FC = () => {
  // Initialize state from sessionStorage if available
  const [history, setHistory] = useState<number[]>(() => {
    const saved = sessionStorage.getItem('term_history');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [currentCmdIndex, setCurrentCmdIndex] = useState(() => {
    const saved = sessionStorage.getItem('term_idx');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [text, setText] = useState('');
  const [, setTyping] = useState(false);

  const resetSession = () => {
    sessionStorage.removeItem('term_history');
    sessionStorage.removeItem('term_idx');
    setHistory([]);
    setCurrentCmdIndex(0);
    setText('');
  };

  // Save state whenever it changes
  useEffect(() => {
    sessionStorage.setItem('term_history', JSON.stringify(history));
    sessionStorage.setItem('term_idx', currentCmdIndex.toString());
  }, [history, currentCmdIndex]);

  useEffect(() => {
    if (currentCmdIndex >= commands.length) return;

    // If we just loaded and we are resuming, maybe we want to skip animation? 
    // For now, we'll keep the animation for the *next* command, but history is already there.
    // Actually, if we are restoring, we might want to auto-complete if it was in middle? 
    // No, simple logic: history has completed commands. currentCmdIndex points to the next one to run.
    
    const targetCmd = commands[currentCmdIndex].cmd;
    let charIndex = 0;
    setTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex <= targetCmd.length) {
        setText(targetCmd.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTyping(false);
        setTimeout(() => {
          setHistory(prev => [...prev, currentCmdIndex]);
          setCurrentCmdIndex(prev => prev + 1);
          setText('');
        }, 600); // Wait before executing next
      }
    }, 50 + Math.random() * 50);

    return () => clearInterval(typeInterval);
  }, [currentCmdIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 font-mono text-base sm:text-lg">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Diffusion App Studio</p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mt-1">Deploying ideas like code</h1>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.6)]" />
          <span>Live node</span>
          <button
            type="button"
            onClick={resetSession}
            className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 hover:border-white/30 hover:text-white transition-colors"
          >
            reset session
          </button>
        </div>
      </header>

      <div className="panel rounded-xl overflow-hidden border border-white/5">
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-emerald-400">diffusion@bear</span>
            <span className="text-gray-500">/workspace</span>
          </div>
          <div className="text-xs text-gray-400">session restored</div>
        </div>

        <div className="p-4 sm:p-6 space-y-2">
          {history.map((cmdIdx) => (
            <div key={cmdIdx} className="mb-6">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <span className="text-white">➜</span>
                <span className="text-blue-400">~</span>
                <span>{commands[cmdIdx].cmd}</span>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {commands[cmdIdx].output}
              </motion.div>
            </div>
          ))}

          {currentCmdIndex < commands.length && (
            <div className="flex items-center gap-2">
              <span className="text-white">➜</span>
              <span className="text-blue-400">~</span>
              <span>{text}</span>
              <span className="w-2.5 h-5 bg-gray-500 animate-pulse inline-block align-middle ml-1"></span>
            </div>
          )}
          
           {currentCmdIndex >= commands.length && (
             <div className="flex items-center gap-2 mt-4">
              <span className="text-white">➜</span>
              <span className="text-blue-400">~</span>
              <span className="w-2.5 h-5 bg-gray-500 animate-pulse inline-block align-middle ml-1"></span>
            </div>
           )}
        </div>
      </div>
    </div>
  );
};
