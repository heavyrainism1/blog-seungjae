import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl transition-all duration-300 ease-out shadow-[0_0_15px_rgba(88,166,255,0.1)]">
      <div className="flex justify-between items-center px-8 h-16 max-w-7xl mx-auto">
        <Link to="/" className="font-['JetBrains_Mono'] font-bold text-blue-400 tracking-tighter text-xl">
          &gt;_ Seungjae Engineering_
        </Link>
        <div className="hidden md:flex gap-8 items-center font-['Space_Grotesk'] tracking-tight text-sm">
          <Link to="/" className="text-blue-400 font-bold border-b-2 border-blue-400 shadow-[0_4px_10px_-2px_rgba(88,166,255,0.5)] transition-all duration-300 ease-out hover:scale-95">Home</Link>
          <Link to="/about" className="text-slate-400 hover:text-slate-100 transition-colors duration-300 ease-out hover:scale-95">About</Link>
          <Link to="/posts" className="text-slate-400 hover:text-slate-100 transition-colors duration-300 ease-out hover:scale-95">Posts</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 transition-all duration-300 ease-out hover:scale-95 rounded text-blue-400 flex items-center">
            <span className="material-symbols-outlined max-h-6 overflow-hidden leading-1" data-icon="terminal">terminal</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
