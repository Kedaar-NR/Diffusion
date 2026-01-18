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
    cmd: 'whoami',
    output: (
      <div className="mb-4 flex items-center gap-3">
        <img src="/logo.png" alt="App Studio Logo" className="w-12 h-12 inline-block object-contain" />
        <div>
          <span className="text-white font-bold block">App Studio</span>
          <span className="text-gray-400 text-sm"> ran by </span>
          <a href="https://bearstrategy.org" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline text-sm">Bear Strategy Lab</a>
        </div>
      </div>
    ),
    delay: 500
  },
  {
    cmd: 'ls ./apps',
    output: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm font-medium">
        <div className="p-4 border border-gray-700 rounded bg-gray-900/10 hover:bg-gray-800 transition-all flex flex-col items-center justify-center text-center h-32 cursor-default group">
          <span className="block text-white text-lg mb-2 group-hover:scale-105 transition-transform">BibleStudy</span>
          <span className="text-gray-500 text-xs">v1.2.0 • Education</span>
        </div>
        <div className="p-4 border border-gray-700 rounded bg-gray-900/10 hover:bg-gray-800 transition-all flex flex-col items-center justify-center text-center h-32 cursor-default group">
          <span className="block text-white text-lg mb-2 group-hover:scale-105 transition-transform">Caloric</span>
          <span className="text-gray-500 text-xs">v2.0.1 • Health</span>
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
    <div className="min-h-screen p-4 sm:p-8 font-mono text-base sm:text-lg max-w-3xl mx-auto">


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
  );
};
