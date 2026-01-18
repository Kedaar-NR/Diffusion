import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Command {
  cmd: string;
  output: React.ReactNode;
  delay?: number;
}

const commands: Command[] = [
  {
    cmd: 'whoarewe',
    output: (
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-white font-bold text-lg">Diffusion Labs</span>
        <span className="text-gray-400 text-lg">ran by</span>
        <a href="https://bearstrategy.org" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline text-lg">Bear Strategy Lab</a>
      </div>
    ),
    delay: 500
  },
  {
    cmd: 'cat mission.txt',
    output: (
      <div className="mb-4 text-gray-300">
        <p className="mb-1">We build viral, high earning apps.</p>
      </div>
    ),
    delay: 1000
  },
  {
    cmd: 'ls ./apps',
    output: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm font-medium">
        <div className="relative overflow-hidden p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center h-auto py-6 cursor-default group transition-all">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity z-0">
             <source src="/8333185-hd_1080_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10">
            <span className="block text-white text-lg mb-1 group-hover:scale-105 transition-transform drop-shadow-md">BibleStudy</span>
            <span className="text-gray-300 text-xs mb-3 block drop-shadow">v1.2.0 • Education</span>
            <p className="text-gray-200 text-xs leading-relaxed px-2 drop-shadow">Dive deeper into scripture with AI-powered insights and guided study plans.</p>
          </div>
        </div>
        <div className="relative overflow-hidden p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center h-auto py-6 cursor-default group transition-all">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity z-0">
             <source src="/8419548-hd_1080_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10">
             <span className="block text-white text-lg mb-1 group-hover:scale-105 transition-transform drop-shadow-md">Caloric</span>
             <span className="text-gray-300 text-xs mb-3 block drop-shadow">v2.0.1 • Health</span>
             <p className="text-gray-200 text-xs leading-relaxed px-2 drop-shadow">Effortlessly track your daily intake and reach your fitness goals with smart analytics.</p>
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
    <div className="min-h-screen w-full text-[#cdd4e4] px-4 sm:px-8 py-10 font-mono overflow-y-auto selection:bg-[#28c840] selection:text-black flex flex-col items-center justify-start">
      <div className="w-full max-w-4xl space-y-3">
        {history.map((cmdIdx) => (
          <div key={cmdIdx} className="text-left space-y-1">
            <div className="flex flex-row items-start gap-2 text-left">
              <span className="text-[#28c840] shrink-0">➜</span>
              <span className="text-blue-400 shrink-0">~</span>
              <span className="break-all">{commands[cmdIdx].cmd}</span>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-left w-full"
            >
              {commands[cmdIdx].output}
            </motion.div>
          </div>
        ))}

        {/* Current typing line */}
        {currentCmdIndex < commands.length && (
          <div className="flex flex-row items-start gap-2 text-left">
            <span className="text-[#28c840] shrink-0">➜</span>
            <span className="text-blue-400 shrink-0">~</span>
            <span className="break-all">
              {text}
              <span className="animate-cursor inline-block w-2.5 h-5 bg-[#28c840] ml-1 align-middle"></span>
            </span>
          </div>
        )}
        
        {currentCmdIndex >= commands.length && (
          <div className="flex flex-row items-start gap-2 text-left mt-4">
            <span className="text-[#28c840] shrink-0">➜</span>
            <span className="text-blue-400 shrink-0">~</span>
            <span className="animate-cursor inline-block w-2.5 h-5 bg-[#28c840] ml-1 align-middle"></span>
          </div>
        )}
      </div>
    </div>
  );
};
