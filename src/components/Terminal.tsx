import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Command {
  cmd: string;
  output: React.ReactNode;
  delay?: number;
}

const commands: Command[] = [
  {
    cmd: 'whoami',
    output: (
      <div className="mb-4 flex items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16">
           <Logo className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-white font-bold block text-xl tracking-tight">Diffusion</span>
          <span className="text-gray-400 text-sm"> ran by </span>
          <a href="https://bearstrategy.org" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline text-sm">Bear Strategy Lab</a>
        </div>
      </div>
    ),
    delay: 500
  },
  {
    cmd: 'cat mission.txt',
    output: (
      <div className="mb-4 text-gray-300">
        <p className="mb-1 text-white font-bold">We build viral, high earning apps.</p>
        <p className="">Moving agency selectivity.</p>
      </div>
    ),
    delay: 1000
  },
  {
    cmd: 'ls ./apps',
    output: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm font-medium">
        <div className="relative overflow-hidden p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center h-auto py-8 cursor-default group transition-all hover:border-white/20">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity z-0">
             <source src="/8333185-hd_1080_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10">
            <span className="block text-white text-xl mb-2 group-hover:scale-105 transition-transform drop-shadow-md font-bold">BibleStudy</span>
            <span className="text-gray-200 text-xs mb-3 block drop-shadow font-medium bg-black/30 w-fit mx-auto px-2 py-1 rounded-full backdrop-blur-sm">v1.2.0 • Education</span>
            <p className="text-gray-100 text-sm leading-relaxed px-2 drop-shadow-lg font-medium">Dive deeper into scripture with AI-powered insights and guided study plans.</p>
          </div>
        </div>
        <div className="relative overflow-hidden p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center h-auto py-8 cursor-default group transition-all hover:border-white/20">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity z-0">
             <source src="/8419548-hd_1080_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10">
             <span className="block text-white text-xl mb-2 group-hover:scale-105 transition-transform drop-shadow-md font-bold">Caloric</span>
             <span className="text-gray-200 text-xs mb-3 block drop-shadow font-medium bg-black/30 w-fit mx-auto px-2 py-1 rounded-full backdrop-blur-sm">v2.0.1 • Health</span>
             <p className="text-gray-100 text-sm leading-relaxed px-2 drop-shadow-lg font-medium">Effortlessly track your daily intake and reach your fitness goals with smart analytics.</p>
          </div>
        </div>
      </div>
    ),
    delay: 1500
  },
  {
    cmd: 'cat ./docs/legal.txt',
    output: (
      <div className="mb-4 text-sm text-gray-400">
        <p>Use of this system is subject to the following policies:</p>
        <ul className="list-none pl-0 mt-2 space-y-1">
          <li>- <Link to="/privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</Link></li>
          <li>- <Link to="/terms" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</Link></li>
        </ul>
      </div>
    ),
    delay: 3000
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
