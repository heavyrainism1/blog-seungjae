import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 border-t border-slate-800/50 bg-slate-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-6 max-w-7xl mx-auto">
        <div className="text-slate-100 font-bold font-['JetBrains_Mono'] tracking-tighter uppercase">
          © 2024 Built with precision
        </div>
        <div className="flex gap-8 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest">
          <Link to="#" className="text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100">GitHub</Link>
          <Link to="#" className="text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100">RSS</Link>
          <Link to="#" className="text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100">Twitter</Link>
          <Link to="#" className="text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100">LinkedIn</Link>
        </div>
        <div className="text-slate-500 font-['JetBrains_Mono'] text-[8px] opacity-40 uppercase">
          v2.4.0-stable_orbital
        </div>
      </div>
    </footer>
  );
};

export default Footer;
